import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRiskAssessmentReviewFrequencyComponent } from './hseq-risk-assessment-review-frequency.component';

describe('HSEQRiskAssessmentReviewFrequencyComponent', () => {
  let component: HSEQRiskAssessmentReviewFrequencyComponent;
  let fixture: ComponentFixture<HSEQRiskAssessmentReviewFrequencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRiskAssessmentReviewFrequencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRiskAssessmentReviewFrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
