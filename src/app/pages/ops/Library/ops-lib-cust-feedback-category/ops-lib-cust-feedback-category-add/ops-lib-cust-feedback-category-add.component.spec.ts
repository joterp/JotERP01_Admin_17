import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibCustFeedbackCategoryAddComponent } from './ops-lib-cust-feedback-category-add.component';

describe('OpsLibCustFeedbackCategoryAddComponent', () => {
  let component: OpsLibCustFeedbackCategoryAddComponent;
  let fixture: ComponentFixture<OpsLibCustFeedbackCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibCustFeedbackCategoryAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibCustFeedbackCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
