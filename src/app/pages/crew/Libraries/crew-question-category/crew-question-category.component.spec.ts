import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWQuestionCategoryComponent } from './crew-question-category.component';

describe('CREWQuestionCategoryComponent', () => {
  let component: CREWQuestionCategoryComponent;
  let fixture: ComponentFixture<CREWQuestionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWQuestionCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWQuestionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
