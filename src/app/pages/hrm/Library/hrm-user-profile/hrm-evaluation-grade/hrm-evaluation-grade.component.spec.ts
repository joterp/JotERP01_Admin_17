import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationGradeComponent } from './hrm-evaluation-grade.component';

describe('HrmEvaluationGradeComponent', () => {
  let component: HrmEvaluationGradeComponent;
  let fixture: ComponentFixture<HrmEvaluationGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
