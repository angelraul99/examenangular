import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, lastValueFrom, Observable}  from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Usuari } from "src/models/usuario";

import { UsuariosModel } from 'src/models/Usuarios.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    EncuestasUrl: string = `${environment.baseUrl}/Usuarios`;
    constructor(private readonly http: HttpClient){}
    login(form:Usuari):Observable<UsuariosModel> {
        let direction = this.EncuestasUrl;
        return this.http.post<UsuariosModel>(direction,from)
      }
}