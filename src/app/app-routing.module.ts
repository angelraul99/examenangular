import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionDetailComponent } from 'src/crud/Educacion/Educacion-detail.component';
import { EducacionComponent } from 'src/crud/Educacion/Educacion.component';
import { PoliticaDetailComponent } from 'src/crud/poliica/Politica-detail.component';
import { PoliticaComponent } from 'src/crud/poliica/Politica.component';
import { RegistrarDetailComponent } from 'src/crud/registro/Registrar-detail.component';
import { RegistrarComponent } from 'src/crud/registro/Registrar.component';
import { SaludDetailComponent } from 'src/crud/salud/Salud-detail.component';
import { SaludComponent } from 'src/crud/salud/Salud.component';
import { UsuariosDetailComponent } from 'src/crud/usuarios/Usuarios-detail.component';
import { UsuariosComponent } from 'src/crud/usuarios/Usuarios.component';
import { InicioComponent } from './crud/inicio/inicio.component';
import { BienvenidoComponent } from './crud/inicio/bienvenido/bienvenido.component';
import { RegistComponent } from 'src/crud/regist/regist.component';

const routes: Routes = [
{path:'',redirectTo:'/inicio',pathMatch:'full'},
{path: 'inicio',component: InicioComponent,children:[
  {path:'', component: BienvenidoComponent},
  
  
]},
{path:'red',component:RegistComponent},
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