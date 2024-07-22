import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibPortcallFeedbackQuestionComponent } from './ops-lib-portcall-feedback-question.component';

describe('OpsLibPortcallFeedbackQuestionComponent', () => {
  let component: OpsLibPortcallFeedbackQuestionComponent;
  let fixture: ComponentFixture<OpsLibPortcallFeedbackQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibPortcallFeedbackQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibPortcallFeedbackQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
