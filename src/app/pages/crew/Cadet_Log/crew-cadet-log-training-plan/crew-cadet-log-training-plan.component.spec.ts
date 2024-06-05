import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogTrainingPlanComponent } from './crew-cadet-log-training-plan.component';

describe('CREWCadetLogTrainingPlanComponent', () => {
  let component: CREWCadetLogTrainingPlanComponent;
  let fixture: ComponentFixture<CREWCadetLogTrainingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogTrainingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogTrainingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
