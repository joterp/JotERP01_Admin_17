import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCPurchaseRemarkIndexComponent } from './purc-purchase-remark-index.component';

describe('PURCPurchaseRemarkIndexComponent', () => {
  let component: PURCPurchaseRemarkIndexComponent;
  let fixture: ComponentFixture<PURCPurchaseRemarkIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCPurchaseRemarkIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCPurchaseRemarkIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
