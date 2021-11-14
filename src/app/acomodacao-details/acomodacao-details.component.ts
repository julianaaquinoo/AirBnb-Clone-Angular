import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { Acomodacao, acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-acomodacao-details',
  templateUrl: './acomodacao-details.component.html',
  styleUrls: ['./acomodacao-details.component.css'],
})
export class AcomodacaoDetailsComponent implements OnInit {
  acomodacao: Acomodacao | undefined;

  acomodacoes = acomodacoes;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the acommodation location from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const aLocFromRoute = String(routeParams.get('acomodacaoLocalizacao'));

    // Find the acomodation that correspond with the 'acomodacaoLocalizacao' provided in route.

    this.acomodacao = acomodacoes.find((a) => a.localizacao === aLocFromRoute);

    //this.abank
    //.getByLocal(aLocFromRoute)
    //.subscribe((a) => (this.acomodacao.localizacao = a.localizacao));
    //}
  }
}
