// src/app/features/kpis-dashboard/components/kpis-dashboard/kpis-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { KPICalculationRequest, KPICalculationResponse, KpiService } from '../../core/services/kpi.service';
//import { KpiMockService } from '../../core/services/kpi-mock.service'; // Importa el servicio mock
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpis-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpis-dashboard.component.html',
  styleUrls: ['./kpis-dashboard.component.scss']
})
export class KpisDashboardComponent implements OnInit {
  // kpisData!: KPISData;
  // errorMessage: string = '';

  // Inyecta el servicio mock
  // constructor(private mockService: KpiMockService) { }
  kpisData!: KPICalculationResponse;
  errorMessage: string = '';

  // Datos de ejemplo o provenientes de formularios
  calculationRequest: KPICalculationRequest = {
    PaquetesTotales: 1000,
    MinutosTrabajados: 120,
    NumeroPersonas: 5,
    PesoReal: 5000,
    PesoObjetivo: 4800,
    PaquetesRechazados: 50,
    HoraInicio: new Date().toISOString(),
    PaquetesProducidos: 950,
    MediaPaquetesPorMinuto: 7.5,
    PaquetesTotalesPedido: 1000,
    TiempoTotal: 8,
    CostoHora: 20,
    NumeroPaquetes: 1000,
    PesoMinimo: 5
  };

  constructor(private kpiService: KpiService) { }
  ngOnInit(): void {
    // this.mockService.getKPISData().subscribe({
    // next: (data) => this.kpisData = data,
    // error: (err) => this.errorMessage = err.message
    // });
    this.calculateKPIs();
  }
  calculateKPIs(): void {
    this.kpiService.getKPICalculations(this.calculationRequest).subscribe({
      next: (data) => this.kpisData = data,
      error: (err) => this.errorMessage = err.error?.error || 'Ocurrió un error al obtener los cálculos.'
    });
  }
}
