import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionDetailComponent } from 'src/crud/Educacion-detail.component';
import { EducacionComponent } from 'src/crud/Educacion.component';
import { PoliticaDetailComponent } from 'src/crud/Politica-detail.component';
import { PoliticaComponent } from 'src/crud/Politica.component';
import { RegistrarDetailComponent } from 'src/crud/Registrar-detail.component';
import { RegistrarComponent } from 'src/crud/Registrar.component';
import { SaludDetailComponent } from 'src/crud/Salud-detail.component';
import { SaludComponent } from 'src/crud/Salud.component';
import { UsuariosDetailComponent } from 'src/crud/Usuarios-detail.component';
import { UsuariosComponent } from 'src/crud/Usuarios.component';
const routes: Routes = [
{path: 'Educacion', component:EducacionComponent}, 
{path: 'Politica', component:PoliticaComponent}, 
{path: 'Registrar', component:RegistrarComponent}, 
{path: 'Salud', component:SaludComponent}, 
{path: 'Usuarios', component:UsuariosComponent}, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }