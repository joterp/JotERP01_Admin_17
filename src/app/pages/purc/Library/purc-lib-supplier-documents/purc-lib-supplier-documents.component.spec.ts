import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCLIBSupplierDocumentsComponent } from './purc-lib-supplier-documents.component';

describe('PURCLIBSupplierDocumentsComponent', () => {
  let component: PURCLIBSupplierDocumentsComponent;
  let fixture: ComponentFixture<PURCLIBSupplierDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCLIBSupplierDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCLIBSupplierDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
