import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './estructura/header/header.component';
import { NavComponent } from './estructura/nav/nav.component';
import { FooterComponent } from './estructura/footer/footer.component';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { LoginComponent } from './modulos/login/login.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { AdministracionComponent } from './modulos/administracion/administracion.component';
import { RegistroComponent } from './modulos/registro/registro.component';
import { MantenimientoComponent } from './modulos/mantenimiento/mantenimiento.component';
import { InventarioComponent } from './modulos/inventario/inventario.component';
import { ManualDeHerramientasComponent } from './modulos/manual.de.herramientas/manual.de.herramientas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    UsuariosComponent,
    AdministracionComponent,
    RegistroComponent,
    MantenimientoComponent,
    InventarioComponent,
    ManualDeHerramientasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
