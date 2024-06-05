import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLibPmsJobListExcelImportAlertComponent } from './tech-lib-pms-job-list-excel-import-alert.component';

describe('TechLibPmsJobListExcelImportAlertComponent', () => {
  let component: TechLibPmsJobListExcelImportAlertComponent;
  let fixture: ComponentFixture<TechLibPmsJobListExcelImportAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechLibPmsJobListExcelImportAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLibPmsJobListExcelImportAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
