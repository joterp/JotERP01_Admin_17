import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewQuestionComponent } from './hrm-interview-question.component';

describe('HrmInterviewQuestionComponent', () => {
  let component: HrmInterviewQuestionComponent;
  let fixture: ComponentFixture<HrmInterviewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
