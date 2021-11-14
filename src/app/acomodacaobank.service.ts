import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acomodacao } from './acomodacoes';

@Injectable({ providedIn: 'root' })
export class AcomodacaobankService {
  acomodacoes: Acomodacao[] = [];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Acomodacao[]> {
    return this.http.get<Acomodacao[]>('/assets/acomodacoes.json');
  }
}
