import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRiskAssessmentWorkActivitiesComponent } from './hseq-risk-assessment-work-activities.component';

describe('HSEQRiskAssessmentWorkActivitiesComponent', () => {
  let component: HSEQRiskAssessmentWorkActivitiesComponent;
  let fixture: ComponentFixture<HSEQRiskAssessmentWorkActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRiskAssessmentWorkActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRiskAssessmentWorkActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
