import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierComponent } from './purc-approve-supplier.component';

describe('PURCApproveSupplierComponent', () => {
  let component: PURCApproveSupplierComponent;
  let fixture: ComponentFixture<PURCApproveSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
