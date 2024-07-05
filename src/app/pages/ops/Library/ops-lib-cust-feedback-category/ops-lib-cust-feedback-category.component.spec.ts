import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibCustFeedbackCategoryComponent } from './ops-lib-cust-feedback-category.component';

describe('OpsLibCustFeedbackCategoryComponent', () => {
  let component: OpsLibCustFeedbackCategoryComponent;
  let fixture: ComponentFixture<OpsLibCustFeedbackCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibCustFeedbackCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibCustFeedbackCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
