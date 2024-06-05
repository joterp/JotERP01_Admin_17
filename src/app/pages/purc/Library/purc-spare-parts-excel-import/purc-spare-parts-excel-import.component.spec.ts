import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCSparePartsExcelImportComponent } from './purc-spare-parts-excel-import.component';

describe('PURCSparePartsExcelImportComponent', () => {
  let component: PURCSparePartsExcelImportComponent;
  let fixture: ComponentFixture<PURCSparePartsExcelImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCSparePartsExcelImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCSparePartsExcelImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
