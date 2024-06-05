import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCApproveSupplierQuestionAddNewQueComponent } from './purc-approve-supplier-question-add-new-que.component';

describe('PURCApproveSupplierQuestionAddNewQueComponent', () => {
  let component: PURCApproveSupplierQuestionAddNewQueComponent;
  let fixture: ComponentFixture<PURCApproveSupplierQuestionAddNewQueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCApproveSupplierQuestionAddNewQueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCApproveSupplierQuestionAddNewQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
