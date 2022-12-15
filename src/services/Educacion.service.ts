
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {EducacionModel} from '../models/Educacion.model';
@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  EncuestasUrl: string = `${environment.baseUrl}/Educacion`;
  constructor(private readonly http: HttpClient) {}

  getEducacionById(id_edu: number) {
    return lastValueFrom(this.http.get<EducacionModel>(`${this.EncuestasUrl}/${id_edu}`));
  }

  getEducacion(): Promise<EducacionModel[]> {
    return lastValueFrom(this.http.get<EducacionModel[]>(`${this.EncuestasUrl}`));
  }

  postEducacion(educacion: EducacionModel) {
    
    return lastValueFrom(this.http.post(`${this.EncuestasUrl}`, educacion));
  }
  putEducacion(educacion: EducacionModel, id_edu: number) { 
    return lastValueFrom(this.http.put(`${this.EncuestasUrl}`, educacion));
  }

  deleteEducacion(id_edu: any) {
    return lastValueFrom(this.http.delete(`${this.EncuestasUrl}/${id_edu}`));
  }
}