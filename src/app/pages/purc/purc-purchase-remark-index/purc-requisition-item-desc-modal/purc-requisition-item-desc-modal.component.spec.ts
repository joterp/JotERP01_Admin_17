import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCRequisitionItemDescModalComponent } from './purc-requisition-item-desc-modal.component';

describe('PURCRequisitionItemDescModalComponent', () => {
  let component: PURCRequisitionItemDescModalComponent;
  let fixture: ComponentFixture<PURCRequisitionItemDescModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCRequisitionItemDescModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCRequisitionItemDescModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
