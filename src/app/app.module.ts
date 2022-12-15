import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EducacionComponent } from 'src/crud/Educacion/Educacion.component';
import { EducacionDetailComponent } from 'src/crud/Educacion/Educacion-detail.component';
 import { PoliticaComponent } from 'src/crud/poliica/Politica.component';
import { PoliticaDetailComponent } from 'src/crud/poliica/Politica-detail.component';
 import { RegistrarComponent } from 'src/crud/registro/Registrar.component';
import { RegistrarDetailComponent } from 'src/crud/registro/Registrar-detail.component';
 import { SaludComponent } from 'src/crud/salud/Salud.component';
import { SaludDetailComponent } from 'src/crud/salud/Salud-detail.component';
 import { UsuariosComponent } from 'src/crud/usuarios/Usuarios.component';
import { UsuariosDetailComponent } from 'src/crud/usuarios/Usuarios-detail.component';
import { InicioComponent } from './crud/inicio/inicio.component';
import { BienvenidoComponent } from './crud/inicio/bienvenido/bienvenido.component';

import { RegistComponent } from '../crud/regist/regist.component';

 @NgModule({
  declarations: [
    AppComponent,
EducacionComponent,
EducacionDetailComponent,
 PoliticaComponent,
PoliticaDetailComponent,
 RegistrarComponent,
RegistrarDetailComponent,
 SaludComponent,
 SaludDetailComponent,
 UsuariosComponent,
UsuariosDetailComponent,
InicioComponent,
BienvenidoComponent,

RegistComponent,

 ],
imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }