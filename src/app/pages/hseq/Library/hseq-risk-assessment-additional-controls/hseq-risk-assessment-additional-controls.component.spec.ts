import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRiskAssessmentAdditionalControlsComponent } from './hseq-risk-assessment-additional-controls.component';

describe('HSEQRiskAssessmentAdditionalControlsComponent', () => {
  let component: HSEQRiskAssessmentAdditionalControlsComponent;
  let fixture: ComponentFixture<HSEQRiskAssessmentAdditionalControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRiskAssessmentAdditionalControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRiskAssessmentAdditionalControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
