import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibCustFeedbackGradeComponent } from './ops-lib-cust-feedback-grade.component';

describe('OpsLibCustFeedbackGradeComponent', () => {
  let component: OpsLibCustFeedbackGradeComponent;
  let fixture: ComponentFixture<OpsLibCustFeedbackGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibCustFeedbackGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibCustFeedbackGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
