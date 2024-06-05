import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierQuestionCopyQueModalComponent } from './purc-approve-supplier-question-copy-que-modal.component';

describe('PURCApproveSupplierQuestionCopyQueModalComponent', () => {
  let component: PURCApproveSupplierQuestionCopyQueModalComponent;
  let fixture: ComponentFixture<PURCApproveSupplierQuestionCopyQueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierQuestionCopyQueModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierQuestionCopyQueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
