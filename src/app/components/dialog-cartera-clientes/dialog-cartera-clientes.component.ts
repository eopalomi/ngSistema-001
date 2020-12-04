import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-cartera-clientes',
  templateUrl: './dialog-cartera-clientes.component.html',
  styleUrls: ['./dialog-cartera-clientes.component.css']
})
export class DialogCarteraClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**************** CONFIGURACION DE LA TABLA ***************/ 

  // DATOS DE LA TABLA
  DATA_PAGE: { 
    col00: string; col01: string, col02: string,     col03: string,       col03_color:string, col04: string,     col05: string,      col06: string,  col06_color:string, col07: string, 
    col08: string, col08_ico: string, col08_color: string, col09: string,      col09_ico: string, col09_color: string, col10: string, col10_ico: string, col10_color: string,
    col11: string, col11_ico: string, col11_color: string
  } [] = [
    { col00: '',  col01: '1',  col02: 'PETRO', col03: 'LOG', col03_color: '#026DA5', col04: 'COMAS', col05: 'Juan Alore', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '2',  col02: 'PDVSA', col03: 'ALM', col03_color: '#778A42', col04: 'COMAS', col05: 'Juan Perez', col06: 'VEN', col06_color: '#F40100', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#F40100', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#F40100', col10: '', col10_ico:'far fa-tired', col10_color: '#F40100', col11: '', col11_ico:'fas fa-search', col11_color: '#F40100',},
    { col00: '',  col01: '3',  col02: 'ALMER', col03: 'CAL', col03_color: '#4BA5BB', col04: 'COMAS', col05: 'Juan Munip', col06: 'CAL', col06_color: '#4BA5BB', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#4BA5BB', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#4BA5BB', col10: '', col10_ico:'far fa-grin',  col10_color: '#4BA5BB', col11: '', col11_ico:'fas fa-search', col11_color: '#4BA5BB',},
    { col00: '',  col01: '4',  col02: 'BONOR', col03: 'LOG', col03_color: '#026DA5', col04: 'COMAS', col05: 'Juan Perez', col06: 'PRO', col06_color: '#692F98', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#692F98', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#692F98', col10: '', col10_ico:'far fa-meh',   col10_color: '#692F98', col11: '', col11_ico:'fas fa-search', col11_color: '#692F98',},
    { col00: '',  col01: '5',  col02: 'AMBEV', col03: 'ALM', col03_color: '#778A42', col04: 'COMAS', col05: 'Juan Perez', col06: 'PRO', col06_color: '#692F98', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#692F98', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#692F98', col10: '', col10_ico:'far fa-angry', col10_color: '#692F98', col11: '', col11_ico:'fas fa-search', col11_color: '#692F98',},
    { col00: '',  col01: '6',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Abdur', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '7',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '8',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '9',  col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '10', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Falco', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '11', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Choka', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '12', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '13', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',},
    { col00: '',  col01: '14', col02: 'GROUP', col03: 'PRO', col03_color: '#692F98', col04: 'COMAS', col05: 'Juan Perez', col06: 'LOG', col06_color: '#026DA5', col07: 'Juan Perez', col08: '', col08_ico:'fas fa-user-tie', col08_color: '#026DA5', col09: '', col09_ico:'fas fa-trash-alt', col09_color: '#026DA5', col10: '', col10_ico:'far fa-grin',  col10_color: '#026DA5', col11: '', col11_ico:'fas fa-search', col11_color: '#026DA5',}
  ];

  // TITULOS DE LA PAGINA
  TITLE_PAGE: { 
    col01: string, col02: string, col03: string, col04: string, col05: string, col06: string, col07: string, col08: string
    col09: string, col10: string, col11: string
  } [] = [{ 
    col01: 'Item',    col02: 'Razon Social', col03: 'Sector Economico', col04: 'Zona',   col05: 'Contacto', col06: 'Area', col07: 'Vendedor', 
    col08: 'Permiso', col09: 'Eliminar',     col10: 'Rendimiento',      col11: 'Reporte'
  }];

  // TIPO DE DATO
  TYPE_COLUMN: { 
    col00: number, col01: number, col02: number, col03: number, col04: number, col05: number, col06: number, col07: number, col08: number
    col09: number, col10: number, col11: number
  } [] = [{ 
    col00: 4, col01: 1, col02: 1, col03: 2, col04: 1, col05: 1, col06: 2, col07: 1, col08: 3,
    col09: 3, col10: 3, col11: 3
  }];

  // OPCIONES DE LA PAGINA
  OPC_PAGE: { paginator:boolean, cabecera: boolean, buscador: boolean}[] = [{
    paginator:true, cabecera: true, buscador: true
  }];
  /*****************************************************/

}
