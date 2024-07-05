import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibCustFeedbackGradeAddComponent } from './ops-lib-cust-feedback-grade-add.component';

describe('OpsLibCustFeedbackGradeAddComponent', () => {
  let component: OpsLibCustFeedbackGradeAddComponent;
  let fixture: ComponentFixture<OpsLibCustFeedbackGradeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibCustFeedbackGradeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibCustFeedbackGradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
