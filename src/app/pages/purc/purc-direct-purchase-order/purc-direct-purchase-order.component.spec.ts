import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCDirectPurchaseOrderComponent } from './purc-direct-purchase-order.component';

describe('PURCDirectPurchaseOrderComponent', () => {
  let component: PURCDirectPurchaseOrderComponent;
  let fixture: ComponentFixture<PURCDirectPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCDirectPurchaseOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCDirectPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
