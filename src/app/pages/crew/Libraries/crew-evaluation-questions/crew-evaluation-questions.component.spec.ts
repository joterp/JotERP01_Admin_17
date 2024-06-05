import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationQuestionsComponent } from './crew-evaluation-questions.component';

describe('CREWEvaluationQuestionsComponent', () => {
  let component: CREWEvaluationQuestionsComponent;
  let fixture: ComponentFixture<CREWEvaluationQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
