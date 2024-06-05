import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierQuestionComponent } from './purc-approve-supplier-question.component';

describe('PURCApproveSupplierQuestionComponent', () => {
  let component: PURCApproveSupplierQuestionComponent;
  let fixture: ComponentFixture<PURCApproveSupplierQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
