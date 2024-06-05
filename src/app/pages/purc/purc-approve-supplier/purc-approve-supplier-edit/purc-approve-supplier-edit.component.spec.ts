import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierEditComponent } from './purc-approve-supplier-edit.component';

describe('PURCApproveSupplierEditComponent', () => {
  let component: PURCApproveSupplierEditComponent;
  let fixture: ComponentFixture<PURCApproveSupplierEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
