
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {RegistrarModel} from '../models/Registrar.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  EncuestasUrl: string = `${environment.baseUrl}/Registrar`;
  constructor(private readonly http: HttpClient) {}

  getRegistrarById(id_en: number) {
    return lastValueFrom(this.http.get<RegistrarModel>(`${this.EncuestasUrl}/${id_en}`));
  }

  getRegistrar(): Promise<RegistrarModel[]> {
    return lastValueFrom(this.http.get<RegistrarModel[]>(`${this.EncuestasUrl}`));
  }

  postRegistrar(registrar: RegistrarModel) {
    
    return lastValueFrom(this.http.post(`${this.EncuestasUrl}`, registrar));
  }
  putRegistrar(registrar: RegistrarModel, id_en: number) { 
    return lastValueFrom(this.http.put(`${this.EncuestasUrl}`, registrar));
  }

  deleteRegistrar(id_en: any) {
    return lastValueFrom(this.http.delete(`${this.EncuestasUrl}/${id_en}`));
  }
}