import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-cartera-cliente',
  templateUrl: './filtro-cartera-cliente.component.html',
  styleUrls: ['./filtro-cartera-cliente.component.css']
})
export class FiltroCarteraClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: {value: string, viewValue: string }[] = [
    {value: 'OFIC', viewValue: 'Oficina'},
    {value: 'VE01', viewValue: 'Juan Perez'},
    {value: 'VE02', viewValue: 'Luis Marcos'}
  ];


}
