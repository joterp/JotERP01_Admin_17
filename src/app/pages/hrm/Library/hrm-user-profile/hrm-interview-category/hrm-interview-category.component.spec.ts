import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewCategoryComponent } from './hrm-interview-category.component';

describe('HrmInterviewCategoryComponent', () => {
  let component: HrmInterviewCategoryComponent;
  let fixture: ComponentFixture<HrmInterviewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
