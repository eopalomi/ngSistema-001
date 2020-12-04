import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteraClientesComponent } from './components/cartera-clientes/cartera-clientes.component';
import { FiltroCarteraClienteComponent } from './components/filtro-cartera-cliente/filtro-cartera-cliente.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path:'cartera-clientes', component: CarteraClientesComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'filtro', component: FiltroCarteraClienteComponent},
  {path:'', redirectTo: 'cartera-clientes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
