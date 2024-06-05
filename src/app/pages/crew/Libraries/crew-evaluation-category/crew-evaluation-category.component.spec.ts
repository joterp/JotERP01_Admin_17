import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationCategoryComponent } from './crew-evaluation-category.component';

describe('CREWEvaluationCategoryComponent', () => {
  let component: CREWEvaluationCategoryComponent;
  let fixture: ComponentFixture<CREWEvaluationCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
