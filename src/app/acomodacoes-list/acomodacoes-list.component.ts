import { Component, OnInit } from '@angular/core';
import { AcomodacaobankService } from '../acomodacaobank.service';
import { Acomodacao, acomodacoes } from '../acomodacoes';

@Component({
  selector: 'app-acomodacoes-list',
  templateUrl: './acomodacoes-list.component.html',
  styleUrls: ['./acomodacoes-list.component.css'],
})
export class AcomodacoesListComponent {
  acomodacoes = this.bank.getAll();
  constructor(private bank: AcomodacaobankService) {}

  achou(acomodacao: Acomodacao) {
    if (acomodacao != null) {
      if (acomodacao.id <= 0) {
        return false;
      }
      return true;
    }
    return false;
  }
}
