
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {PoliticaModel} from '../models/Politica.model';
@Injectable({
  providedIn: 'root'
})
export class PoliticaService {

  EncuestasUrl: string = `${environment.baseUrl}/Politica`;
  constructor(private readonly http: HttpClient) {}

  getPoliticaById(id_pol: number) {
    return lastValueFrom(this.http.get<PoliticaModel>(`${this.EncuestasUrl}/${id_pol}`));
  }

  getPolitica(): Promise<PoliticaModel[]> {
    return lastValueFrom(this.http.get<PoliticaModel[]>(`${this.EncuestasUrl}`));
  }

  postPolitica(politica: PoliticaModel) {
    
    return lastValueFrom(this.http.post(`${this.EncuestasUrl}`, politica));
  }
  putPolitica(politica: PoliticaModel, id_pol: number) { 
    return lastValueFrom(this.http.put(`${this.EncuestasUrl}`, politica));
  }

  deletePolitica(id_pol: any) {
    return lastValueFrom(this.http.delete(`${this.EncuestasUrl}/${id_pol}`));
  }
}