import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKPIReportIndexAddComponent } from './admin-kpi-report-index-add.component';

describe('AdminKPIReportIndexAddComponent', () => {
  let component: AdminKPIReportIndexAddComponent;
  let fixture: ComponentFixture<AdminKPIReportIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminKPIReportIndexAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminKPIReportIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
