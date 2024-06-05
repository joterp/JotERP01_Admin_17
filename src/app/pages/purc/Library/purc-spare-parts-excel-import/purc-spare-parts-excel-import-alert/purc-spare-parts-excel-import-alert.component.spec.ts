import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcSparePartsExcelImportAlertComponent } from './purc-spare-parts-excel-import-alert.component';

describe('PurcSparePartsExcelImportAlertComponent', () => {
  let component: PurcSparePartsExcelImportAlertComponent;
  let fixture: ComponentFixture<PurcSparePartsExcelImportAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcSparePartsExcelImportAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcSparePartsExcelImportAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
