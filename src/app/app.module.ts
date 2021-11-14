import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AcomodacoesListComponent } from './acomodacoes-list/acomodacoes-list.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { FiltraAcomodacoesComponent } from './filtra-acomodacoes/filtra-acomodacoes.component';
import { AcomodacaoDetailsComponent } from './acomodacao-details/acomodacao-details.component';
import { FilterLocListComponent } from './filter-loc-list/filter-loc-list.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: FiltraAcomodacoesComponent },
      { path: 'acomodacoes', component: AcomodacoesListComponent },
      {
        path: 'acomodacoes/:acomodacaoLocalizacao',
        component: FilterLocListComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AcomodacoesListComponent,
    AcomodacaoDetailsComponent,
    FiltrarComponent,
    FiltraAcomodacoesComponent,
    FilterLocListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
