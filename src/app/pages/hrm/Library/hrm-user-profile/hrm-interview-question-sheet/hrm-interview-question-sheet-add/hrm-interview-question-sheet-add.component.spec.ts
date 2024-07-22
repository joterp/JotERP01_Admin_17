import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewQuestionSheetAddComponent } from './hrm-interview-question-sheet-add.component';

describe('HrmInterviewQuestionSheetAddComponent', () => {
  let component: HrmInterviewQuestionSheetAddComponent;
  let fixture: ComponentFixture<HrmInterviewQuestionSheetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewQuestionSheetAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewQuestionSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
