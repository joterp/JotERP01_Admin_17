import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewQuestionCategoryAddComponent } from './crew-question-category-add.component';

describe('CrewQuestionCategoryAddComponent', () => {
  let component: CrewQuestionCategoryAddComponent;
  let fixture: ComponentFixture<CrewQuestionCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewQuestionCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewQuestionCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
