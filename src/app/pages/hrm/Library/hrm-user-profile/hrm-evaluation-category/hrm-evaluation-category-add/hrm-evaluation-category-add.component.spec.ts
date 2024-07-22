import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationCategoryAddComponent } from './hrm-evaluation-category-add.component';

describe('HrmEvaluationCategoryAddComponent', () => {
  let component: HrmEvaluationCategoryAddComponent;
  let fixture: ComponentFixture<HrmEvaluationCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
