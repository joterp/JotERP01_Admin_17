import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationCategoryComponent } from './hrm-evaluation-category.component';

describe('HrmEvaluationCategoryComponent', () => {
  let component: HrmEvaluationCategoryComponent;
  let fixture: ComponentFixture<HrmEvaluationCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
