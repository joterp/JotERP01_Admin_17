import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierAddContactModalComponent } from './purc-approve-supplier-add-contact-modal.component';

describe('PURCApproveSupplierAddContactModalComponent', () => {
  let component: PURCApproveSupplierAddContactModalComponent;
  let fixture: ComponentFixture<PURCApproveSupplierAddContactModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierAddContactModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierAddContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
