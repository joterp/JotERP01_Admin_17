import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCQuickRequisitionEditComponent } from './purc-quick-requisition-edit.component';

describe('PURCQuickRequisitionEditComponent', () => {
  let component: PURCQuickRequisitionEditComponent;
  let fixture: ComponentFixture<PURCQuickRequisitionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCQuickRequisitionEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCQuickRequisitionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
