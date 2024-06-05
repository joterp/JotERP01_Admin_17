import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCLIBSupplierDocumentsEditComponent } from './purc-lib-supplier-documents-edit.component';

describe('PURCLIBSupplierDocumentsEditComponent', () => {
  let component: PURCLIBSupplierDocumentsEditComponent;
  let fixture: ComponentFixture<PURCLIBSupplierDocumentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCLIBSupplierDocumentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCLIBSupplierDocumentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
