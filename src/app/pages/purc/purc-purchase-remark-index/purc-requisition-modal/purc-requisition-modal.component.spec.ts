import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCRequisitionModalComponent } from './purc-requisition-modal.component';

describe('PURCRequisitionModalComponent', () => {
  let component: PURCRequisitionModalComponent;
  let fixture: ComponentFixture<PURCRequisitionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCRequisitionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCRequisitionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
