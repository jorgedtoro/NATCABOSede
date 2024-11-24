// src/app/core/services/kpi.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
//import { KpiMockService } from './kpi-mock.service'; // Importa el servicio mock

// export interface KPISData {
// cliente: string;
// producto: string;
// confeccion: string;
// costeMOD: number;
// ppm: number;
// extrapeso: number;
// horaInicio: string; // ISO string
// porcentajePedido: number;
// horaFinAproximada: string; // ISO string
// }
export interface KPICalculationRequest {
  PaquetesTotales: number;
  MinutosTrabajados: number;
  NumeroPersonas: number;
  PesoReal: number;
  PesoObjetivo: number;
  PaquetesRechazados: number;
  HoraInicio: string; // ISO string
  PaquetesProducidos: number;
  MediaPaquetesPorMinuto: number;
  PaquetesTotalesPedido: number;
  TiempoTotal: number;
  CostoHora: number;
  NumeroPaquetes: number;
  PesoMinimo: number;
}
export interface KPICalculationResponse {
  ppm: number;
  pm: number;
  extrapeso: number;
  ftt: number;
  horaInicioLote: string; // ISO string
  horaFinAproximada: string; // ISO string
  porcentajePedido: number;
  costeMOD: number;
}
@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private apiUrl = `${environment.apiUrl}`;

  //constructor(private http: HttpClient, private mockService: KpiMockService) { }
  constructor(private http: HttpClient) { }

  getKPICalculations(request: KPICalculationRequest): Observable<KPICalculationResponse> {
    return this.http.post<KPICalculationResponse>(this.apiUrl, request);
  }
  //Método para usar la API real
  // getKPISDataFromApi(): Observable<KPISData> {
  // return this.http.get<KPISData>(this.apiUrl);
  // }

  //Método para usar el servicio mock
  // getKPISData(): Observable<KPISData> {
  // return this.mockService.getKPISData();
  // }
}
