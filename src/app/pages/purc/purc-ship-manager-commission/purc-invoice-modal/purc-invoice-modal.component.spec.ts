import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCInvoiceModalComponent } from './purc-invoice-modal.component';

describe('PURCInvoiceModalComponent', () => {
  let component: PURCInvoiceModalComponent;
  let fixture: ComponentFixture<PURCInvoiceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCInvoiceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCInvoiceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
