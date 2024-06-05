import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInterviewQuestionsComponent } from './crew-interview-questions.component';

describe('CREWInterviewQuestionsComponent', () => {
  let component: CREWInterviewQuestionsComponent;
  let fixture: ComponentFixture<CREWInterviewQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInterviewQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInterviewQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
