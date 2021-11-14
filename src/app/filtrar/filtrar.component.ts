import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css'],
})
export class FiltrarComponent {
  constructor(private route: Router) {}
  showMenu() {
    this.route.navigate(['acomodacoes']);
  }
}
