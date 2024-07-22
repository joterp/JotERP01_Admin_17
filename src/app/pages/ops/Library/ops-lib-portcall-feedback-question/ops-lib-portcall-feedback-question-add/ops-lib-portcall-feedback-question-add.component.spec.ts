import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibPortcallFeedbackQuestionAddComponent } from './ops-lib-portcall-feedback-question-add.component';

describe('OpsLibPortcallFeedbackQuestionAddComponent', () => {
  let component: OpsLibPortcallFeedbackQuestionAddComponent;
  let fixture: ComponentFixture<OpsLibPortcallFeedbackQuestionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibPortcallFeedbackQuestionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibPortcallFeedbackQuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
