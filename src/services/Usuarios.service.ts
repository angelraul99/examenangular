
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {UsuariosModel} from '../models/Usuarios.model';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  EncuestasUrl: string = `${environment.baseUrl}/Usuarios`;
  constructor(private readonly http: HttpClient) {}

  getUsuariosById(id_us: number) {
    return lastValueFrom(this.http.get<UsuariosModel>(`${this.EncuestasUrl}/${id_us}`));
  }

  getUsuarios(): Promise<UsuariosModel[]> {
    return lastValueFrom(this.http.get<UsuariosModel[]>(`${this.EncuestasUrl}`));
  }

  postUsuarios(usuarios: UsuariosModel) {
    
    return lastValueFrom(this.http.post(`${this.EncuestasUrl}`, usuarios));
  }
  putUsuarios(usuarios: UsuariosModel, id_us: number) { 
    return lastValueFrom(this.http.put(`${this.EncuestasUrl}`, usuarios));
  }

  deleteUsuarios(id_us: any) {
    return lastValueFrom(this.http.delete(`${this.EncuestasUrl}/${id_us}`));
  }
}