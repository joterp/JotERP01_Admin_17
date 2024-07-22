import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewQuestionAddComponent } from './hrm-interview-question-add.component';

describe('HrmInterviewQuestionAddComponent', () => {
  let component: HrmInterviewQuestionAddComponent;
  let fixture: ComponentFixture<HrmInterviewQuestionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewQuestionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewQuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
