import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewCategoryAddComponent } from './hrm-interview-category-add.component';

describe('HrmInterviewCategoryAddComponent', () => {
  let component: HrmInterviewCategoryAddComponent;
  let fixture: ComponentFixture<HrmInterviewCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
