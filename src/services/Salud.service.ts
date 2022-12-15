
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {SaludModel} from '../models/Salud.model';
@Injectable({
  providedIn: 'root'
})
export class SaludService {

  EncuestasUrl: string = `${environment.baseUrl}/Salud`;
  constructor(private readonly http: HttpClient) {}

  getSaludById(id_salu: number) {
    return lastValueFrom(this.http.get<SaludModel>(`${this.EncuestasUrl}/${id_salu}`));
  }

  getSalud(): Promise<SaludModel[]> {
    return lastValueFrom(this.http.get<SaludModel[]>(`${this.EncuestasUrl}`));
  }

  postSalud(salud: SaludModel) {
    
    return lastValueFrom(this.http.post(`${this.EncuestasUrl}`, salud));
  }
  putSalud(salud: SaludModel, id_salu: number) { 
    return lastValueFrom(this.http.put(`${this.EncuestasUrl}`, salud));
  }

  deleteSalud(id_salu: any) {
    return lastValueFrom(this.http.delete(`${this.EncuestasUrl}/${id_salu}`));
  }
}