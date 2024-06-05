import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCLibCatalogueExcelImportModalComponent } from './purc-lib-catalogue-excel-import-modal.component';

describe('PURCLibCatalogueExcelImportModalComponent', () => {
  let component: PURCLibCatalogueExcelImportModalComponent;
  let fixture: ComponentFixture<PURCLibCatalogueExcelImportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCLibCatalogueExcelImportModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCLibCatalogueExcelImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
