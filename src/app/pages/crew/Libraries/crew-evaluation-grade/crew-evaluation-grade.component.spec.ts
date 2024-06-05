import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationGradeComponent } from './crew-evaluation-grade.component';

describe('CREWEvaluationGradeComponent', () => {
  let component: CREWEvaluationGradeComponent;
  let fixture: ComponentFixture<CREWEvaluationGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
