import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcLibAslExcelImportAlertComponent } from './purc-lib-asl-excel-import-alert.component';

describe('PurcLibAslExcelImportAlertComponent', () => {
  let component: PurcLibAslExcelImportAlertComponent;
  let fixture: ComponentFixture<PurcLibAslExcelImportAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcLibAslExcelImportAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcLibAslExcelImportAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
