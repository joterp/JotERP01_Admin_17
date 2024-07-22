import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationGradeAddComponent } from './hrm-evaluation-grade-add.component';

describe('HrmEvaluationGradeAddComponent', () => {
  let component: HrmEvaluationGradeAddComponent;
  let fixture: ComponentFixture<HrmEvaluationGradeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationGradeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationGradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
