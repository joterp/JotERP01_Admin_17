import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKPIReportIndexComponent } from './admin-kpi-report-index.component';

describe('AdminKPIReportIndexComponent', () => {
  let component: AdminKPIReportIndexComponent;
  let fixture: ComponentFixture<AdminKPIReportIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminKPIReportIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminKPIReportIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
