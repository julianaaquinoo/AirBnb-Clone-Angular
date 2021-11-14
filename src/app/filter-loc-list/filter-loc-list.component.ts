import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { Acomodacao } from '../acomodacoes';

@Component({
  selector: 'app-filter-loc-list',
  templateUrl: './filter-loc-list.component.html',
  styleUrls: ['./filter-loc-list.component.css'],
})
export class FilterLocListComponent implements OnInit {
  acomodacoes = this.bank.getAll();
  acomodacao: Acomodacao | undefined;
  routeParams = this.route.snapshot.paramMap;
  aLocFromRoute = String(this.routeParams.get('acomodacaoLocalizacao'));

  constructor(
    private route: ActivatedRoute,
    private bank: AcomodacaobankService
  ) {}

  achou(acomodacao: Acomodacao) {
    if (acomodacao != null) {
      if (acomodacao.id <= 0) {
        return false;
      }
      return true;
    }
    return false;
  }

  valido(acomodacao: Acomodacao) {
    if (acomodacao.localizacao === this.aLocFromRoute) {
      return true;
    }
  }

  ngOnInit() {
    // Find the acomodation that correspond with the 'acomodacaoLocalizacao' provided in route.
  }
}
