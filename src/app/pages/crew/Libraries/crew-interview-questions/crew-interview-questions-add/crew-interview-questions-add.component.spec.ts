import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInterviewQuestionsAddComponent } from './crew-interview-questions-add.component';

describe('CREWInterviewQuestionsAddComponent', () => {
  let component: CREWInterviewQuestionsAddComponent;
  let fixture: ComponentFixture<CREWInterviewQuestionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInterviewQuestionsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInterviewQuestionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
