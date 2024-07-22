import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationQuestionSheetComponent } from './hrm-evaluation-question-sheet.component';

describe('HrmEvaluationQuestionSheetComponent', () => {
  let component: HrmEvaluationQuestionSheetComponent;
  let fixture: ComponentFixture<HrmEvaluationQuestionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationQuestionSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationQuestionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
