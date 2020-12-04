import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SelectionModel } from "@angular/cdk/collections";


@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements AfterViewInit, OnInit {
  @Input() DATA_PAGE;   // Datos de la Pagina
  @Input() TITLE_PAGE;  // Titulos de la Pagina
  @Input() OPC_PAGE;    // Opciones de la Pagina
  @Input() TYPE_COLUMN; // Tipos de Dato para las Columnas
  maximoRowsPaginator: number = 100; // Numero Maximo Filas Paginador
  
  //displayedColumns: string[] = ['col00','col01','col02','col03','col04','col05','col06','col07','col08','col09','col10','col11'];          // Columnas a Mostrar Tabla
  displayedColumns: string[]; // Columnas a Mostrar Tabla
  dataSource: MatTableDataSource<any>; // Data Para la Tabla

  //columnas_bucle: string[] = ['col01','col02','col03','col04','col05','col06','col07','col08','col09','col10','col11'];

  @ViewChild(MatPaginator) paginator: MatPaginator; // **** - Para poder Paginar
  @ViewChild(MatSort) sort: MatSort;                // **** - Para poder Ordenar Columnas

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // Buscar los Titulos de las Columnas en la Data
    for (let rs of this.DATA_PAGE) { var columnasTabla: string[] = Object.keys(rs) } 

    //Retirar las Columnas de Color
    columnasTabla = this.removerItemArray('_color', columnasTabla);
    columnasTabla = this.removerItemArray('_ico', columnasTabla);

    // Inicializar las Variables
    this.displayedColumns = columnasTabla;                  // Asignar las Columnas a Mostrar
    this.dataSource = new MatTableDataSource(this.DATA_PAGE); // Asignar la Data de la tabla
    this.dataSource.paginator = this.paginator;    
  }

  ngAfterViewInit() { // averiguar
    this.dataSource.paginator = this.paginator; // ****
    this.dataSource.sort = this.sort; // ****
  }

  /************** FUNCIONES **************/
  removerItemArray(item: string, array: string[]) {
    let newArray = array.filter(i => !i.includes(item));

    return newArray;
  }

  applyFilter(event: Event) { // ****
    const filterValue = (event.target as HTMLInputElement).value; // ****
    this.dataSource.filter = filterValue.trim().toLowerCase(); // ****

    if (this.dataSource.paginator) { // ****
      this.dataSource.paginator.firstPage(); // ****
    }
  }

  getTitle(key: string) {
    if (this.TITLE_PAGE[0][key] == undefined) {
      return key
    } else {
      return this.TITLE_PAGE[0][key]
    }
  }

  validarPaginador() {
    if (this.OPC_PAGE == undefined) { return true }
    else if (this.OPC_PAGE[0].paginator == true) { return true }
    else { return false }
  }

  validarBuscador() {
    if (this.OPC_PAGE == undefined) { return true }
    else if (this.OPC_PAGE[0].buscador == true) { return true }
    else { return false }
  }

  tipoDato(key: string, tipo: number) {
    if (this.TYPE_COLUMN[0][key] == undefined) {
      return false
    } else {
      if (this.TYPE_COLUMN[0][key] == tipo) { return true } 
      else { return false }
    }
  }

  obtenerCSS() {
    if (this.OPC_PAGE == undefined) {
      return {
        'background': '#26a69a',
        'color': 'white'
      }
    }
    else if (this.OPC_PAGE[0].cabecera == true)
      return {
        'background': '#26a69a',
        'color': 'white'
      }
    else 
      return {
          'background': '#26a69a',
          'color': 'white',
          'display': 'none',
          'height': 0 
      };
  }
  
  getColor(datos: string, columna: string) {
    let columnColor: string = columna + "_color";

    if (datos[columnColor] !== undefined) {
      return { 'background-color': datos[columnColor] };
    } else {
      return { 'background-color': 'transparent', 'color': 'red' };
    }
  }

  icoBoton(obj: string, column: string) {
    let columnClas: string = column + "_ico";
      
    if (obj[columnClas] !== undefined) {
      return obj[columnClas];
    } else {
      console.log('aqui 1');
      return 'fas fa-times';
    }
  }

  styleButton(obj: string, column: string) {
    let columnColor: string = column + "_color";
    
    if (obj[column] !== undefined) {
      return { 'font-size':'22px', 'color':obj[columnColor], 'vertical-align': 'middle' };
    } else {
      return { 'font-size':'22px', 'color':'red','vertical-align': 'middle' };
    }
  }

  /************** DIALOG ***************/
  openDialog(): void {
    /*const dialogRef = this.dialog.open(PaginaTablaComponent, {
      width: '400px',
      data: {name: 'Erick'}
    });*/

    let config = new MatDialogConfig();
    let dialogRef:MatDialogRef<PaginaTablaComponent> = this.dialog.open(PaginaTablaComponent, config);


    let DATA_PAGE1: { 
      col00: string; col05: string
    } [] = [
      { col00: '',  col05: 'Juan Alore'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Munip'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Abdur'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Falco'},
      { col00: '',  col05: 'Juan Choka'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Perez'},
      { col00: '',  col05: 'Juan Perez'}
    ];
  
    // TITULOS DE LA PAGINA
    let TITLE_PAGE1: { 
      col00: string, col05: string
    } [] = [{ 
      col00: '',    col05: 'Vendedor'
    }];
  
    // TIPO DE DATO
    let TYPE_COLUMN1: { 
      col00: number, col05: number
    } [] = [{ 
      col00: 4, col05: 1
    }];
  
    // OPCIONES DE LA PAGINA
    let OPC_PAGE1: { paginator:boolean, cabecera: boolean, buscador: boolean}[] = [{
      paginator:true, cabecera: true, buscador: true
    }];

    dialogRef.componentInstance.DATA_PAGE   = DATA_PAGE1;
    dialogRef.componentInstance.TITLE_PAGE  = TITLE_PAGE1;
    dialogRef.componentInstance.OPC_PAGE    = OPC_PAGE1;
    dialogRef.componentInstance.TYPE_COLUMN = TYPE_COLUMN1;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  /************** SELECTOR ***************/
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}



/**************** DATOS PRUEBA PARA LA TABLA ***************/
/*DATA_PAGE: { col01: string, col02: string,   col03: string,    col04: string}[] = [
  { col01: '1', col02: '21%', col03: 'Juan Alore', col04: 'blue'},
  { col01: '2', col02: '18%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '3', col02: '31%', col03: 'Juan Munip', col04: 'blue'},
  { col01: '4', col02: '11%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '5', col02: '48%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '6', col02: '28%', col03: 'Juan Abdur', col04: 'blue'},
  { col01: '7', col02: '48%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '8', col02: '12%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '9', col02: '34%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '1', col02: '98%', col03: 'Juan Falco', col04: 'blue'},
  { col01: '2', col02: '48%', col03: 'Juan Choka', col04: 'blue'},
  { col01: '3', col02: '23%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '4', col02: '48%', col03: 'Juan Perez', col04: 'blue'},
  { col01: '5', col02: '11%', col03: 'Juan Perez', col04: 'blue'}
];

TITLE_PAGE: { col01: string, col02: string, col03: string, col04: string }[] = [{ col01: 'id', col02: 'name', col03: 'progress', col04: 'color' }];*/
/*****************************************************/