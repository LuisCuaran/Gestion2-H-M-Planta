import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { RegistroComponent } from './modulos/registro/registro.component';
import { MantenimientoComponent } from './modulos/mantenimiento/mantenimiento.component';
import { InventarioComponent } from './modulos/inventario/inventario.component';
import { ManualDeHerramientasComponent } from './modulos/manual.de.herramientas/manual.de.herramientas.component';

const routes: Routes = [
{
  path: "", component: PrincipalComponent,
  children: [
  {path: "dashboard", component: DashboardComponent},
  {path: "", redirectTo: "/dashboard", pathMatch: "full"},
  {path: "usuarios", component: UsuariosComponent},
  {path: "administracion", component: AdministracionComponent},
  {path: "registro", component: RegistroComponent},
  {path: "mantenimiento", component: MantenimientoComponent},
  {path: "inventarios", component: InventarioComponent},
  {path: "manual_de_herramientas", component: ManualDeHerramientasComponent},
  ]
},
{path: "login", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
