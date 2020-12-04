import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CarteraClientesComponent } from './components/cartera-clientes/cartera-clientes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PaginaTablaComponent } from './components/pagina-tabla/pagina-tabla.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlCro } from './paginator.module';
import { PaginaFormularioComponent } from './components/pagina-formulario/pagina-formulario.component';
import { FiltroCarteraClienteComponent } from './components/filtro-cartera-cliente/filtro-cartera-cliente.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CarteraClientesComponent,
    UsuariosComponent,
    PaginaTablaComponent,
    PaginaFormularioComponent,
    FiltroCarteraClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
  bootstrap: [AppComponent]
})
export class AppModule { }
