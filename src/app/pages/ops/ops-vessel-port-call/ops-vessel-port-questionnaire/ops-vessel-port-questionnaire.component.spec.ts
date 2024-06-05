import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVesselPortQuestionnaireComponent } from './ops-vessel-port-questionnaire.component';

describe('OPSVesselPortQuestionnaireComponent', () => {
  let component: OPSVesselPortQuestionnaireComponent;
  let fixture: ComponentFixture<OPSVesselPortQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVesselPortQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVesselPortQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
