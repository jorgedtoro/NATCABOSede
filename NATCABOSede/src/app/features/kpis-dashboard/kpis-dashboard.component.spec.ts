import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpisDashboardComponent } from './kpis-dashboard.component';

describe('KpisDashboardComponent', () => {
  let component: KpisDashboardComponent;
  let fixture: ComponentFixture<KpisDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpisDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpisDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
