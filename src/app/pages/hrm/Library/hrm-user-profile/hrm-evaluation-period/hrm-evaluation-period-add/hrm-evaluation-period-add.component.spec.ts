import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationPeriodAddComponent } from './hrm-evaluation-period-add.component';

describe('HrmEvaluationPeriodAddComponent', () => {
  let component: HrmEvaluationPeriodAddComponent;
  let fixture: ComponentFixture<HrmEvaluationPeriodAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationPeriodAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationPeriodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
