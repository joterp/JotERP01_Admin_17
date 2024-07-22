import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationQuestionAddComponent } from './hrm-evaluation-question-add.component';

describe('HrmEvaluationQuestionAddComponent', () => {
  let component: HrmEvaluationQuestionAddComponent;
  let fixture: ComponentFixture<HrmEvaluationQuestionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationQuestionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationQuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
