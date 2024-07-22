import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewQuestionSheetComponent } from './hrm-interview-question-sheet.component';

describe('HrmInterviewQuestionSheetComponent', () => {
  let component: HrmInterviewQuestionSheetComponent;
  let fixture: ComponentFixture<HrmInterviewQuestionSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewQuestionSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewQuestionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
