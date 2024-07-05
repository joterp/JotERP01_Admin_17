import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibCustFeedbackQuestionAddComponent } from './ops-lib-cust-feedback-question-add.component';

describe('OpsLibCustFeedbackQuestionAddComponent', () => {
  let component: OpsLibCustFeedbackQuestionAddComponent;
  let fixture: ComponentFixture<OpsLibCustFeedbackQuestionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibCustFeedbackQuestionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibCustFeedbackQuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
