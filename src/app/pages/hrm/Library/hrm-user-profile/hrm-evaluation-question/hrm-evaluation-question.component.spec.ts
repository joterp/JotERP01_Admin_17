import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationQuestionComponent } from './hrm-evaluation-question.component';

describe('HrmEvaluationQuestionComponent', () => {
  let component: HrmEvaluationQuestionComponent;
  let fixture: ComponentFixture<HrmEvaluationQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
