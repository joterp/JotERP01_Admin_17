import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAssignQuestionsComponent } from './crew-assign-questions.component';

describe('CREWAssignQuestionsComponent', () => {
  let component: CREWAssignQuestionsComponent;
  let fixture: ComponentFixture<CREWAssignQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAssignQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAssignQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
