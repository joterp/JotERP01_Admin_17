import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRiskAssessmentAdditionalControlsAddComponent } from './hseq-risk-assessment-additional-controls-add.component';

describe('HSEQRiskAssessmentAdditionalControlsAddComponent', () => {
  let component: HSEQRiskAssessmentAdditionalControlsAddComponent;
  let fixture: ComponentFixture<HSEQRiskAssessmentAdditionalControlsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRiskAssessmentAdditionalControlsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRiskAssessmentAdditionalControlsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
