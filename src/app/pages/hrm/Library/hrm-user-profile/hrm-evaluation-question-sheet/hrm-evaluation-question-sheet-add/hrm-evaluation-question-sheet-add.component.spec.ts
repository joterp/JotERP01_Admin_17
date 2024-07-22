import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationQuestionSheetAddComponent } from './hrm-evaluation-question-sheet-add.component';

describe('HrmEvaluationQuestionSheetAddComponent', () => {
  let component: HrmEvaluationQuestionSheetAddComponent;
  let fixture: ComponentFixture<HrmEvaluationQuestionSheetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationQuestionSheetAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationQuestionSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
