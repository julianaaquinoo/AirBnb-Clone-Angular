import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-filtra-acomodacoes',
  templateUrl: './filtra-acomodacoes.component.html',
  styleUrls: ['./filtra-acomodacoes.component.css'],
})
export class FiltraAcomodacoesComponent implements OnInit {
  acomodacoes = this.bank.getAll();

  checkoutForm = this.formBuilder.group({ local: '' });

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private bank: AcomodacaobankService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.checkoutForm.reset();
  }

  search(localizacao: string) {
    this.route.navigate(['/acomodacoes', localizacao]);
  }
}
