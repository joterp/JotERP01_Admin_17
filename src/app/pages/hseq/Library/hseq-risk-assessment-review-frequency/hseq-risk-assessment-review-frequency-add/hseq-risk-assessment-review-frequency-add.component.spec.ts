import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRiskAssessmentReviewFrequencyAddComponent } from './hseq-risk-assessment-review-frequency-add.component';

describe('HSEQRiskAssessmentReviewFrequencyAddComponent', () => {
  let component: HSEQRiskAssessmentReviewFrequencyAddComponent;
  let fixture: ComponentFixture<HSEQRiskAssessmentReviewFrequencyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRiskAssessmentReviewFrequencyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRiskAssessmentReviewFrequencyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
