import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogTrainingPlanAddComponent } from './crew-cadet-log-training-plan-add.component';

describe('CREWCadetLogTrainingPlanAddComponent', () => {
  let component: CREWCadetLogTrainingPlanAddComponent;
  let fixture: ComponentFixture<CREWCadetLogTrainingPlanAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogTrainingPlanAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogTrainingPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
