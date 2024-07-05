import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibCustFeedbackQuestionComponent } from './ops-lib-cust-feedback-question.component';

describe('OpsLibCustFeedbackQuestionComponent', () => {
  let component: OpsLibCustFeedbackQuestionComponent;
  let fixture: ComponentFixture<OpsLibCustFeedbackQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibCustFeedbackQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibCustFeedbackQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
