import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierShortEditComponent } from './purc-approve-supplier-short-edit.component';

describe('PURCApproveSupplierShortEditComponent', () => {
  let component: PURCApproveSupplierShortEditComponent;
  let fixture: ComponentFixture<PURCApproveSupplierShortEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierShortEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierShortEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
