import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EducacionComponent } from 'src/crud/Educacion.component';
import { EducacionDetailComponent } from 'src/crud/Educacion-detail.component';
 import { PoliticaComponent } from 'src/crud/Politica.component';
import { PoliticaDetailComponent } from 'src/crud/Politica-detail.component';
 import { RegistrarComponent } from 'src/crud/Registrar.component';
import { RegistrarDetailComponent } from 'src/crud/Registrar-detail.component';
 import { SaludComponent } from 'src/crud/Salud.component';
import { SaludDetailComponent } from 'src/crud/Salud-detail.component';
 import { UsuariosComponent } from 'src/crud/Usuarios.component';
import { UsuariosDetailComponent } from 'src/crud/Usuarios-detail.component';
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