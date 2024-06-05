import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCNewRequisitionEditComponent } from './purc-new-requisition-edit.component';

describe('PURCNewRequisitionEditComponent', () => {
  let component: PURCNewRequisitionEditComponent;
  let fixture: ComponentFixture<PURCNewRequisitionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCNewRequisitionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCNewRequisitionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
