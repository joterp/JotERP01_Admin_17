import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQRiskAssessmentWorkActivitiesAddComponent } from './hseq-risk-assessment-work-activities-add.component';

describe('HSEQRiskAssessmentWorkActivitiesAddComponent', () => {
  let component: HSEQRiskAssessmentWorkActivitiesAddComponent;
  let fixture: ComponentFixture<HSEQRiskAssessmentWorkActivitiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQRiskAssessmentWorkActivitiesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQRiskAssessmentWorkActivitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
