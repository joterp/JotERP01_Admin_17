import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcLibCatalougeExcelImportComponent } from './purc-lib-catalouge-excel-import.component';

describe('PurcLibCatalougeExcelImportComponent', () => {
  let component: PurcLibCatalougeExcelImportComponent;
  let fixture: ComponentFixture<PurcLibCatalougeExcelImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcLibCatalougeExcelImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcLibCatalougeExcelImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
