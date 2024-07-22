import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmEvaluationPeriodComponent } from './hrm-evaluation-period.component';

describe('HrmEvaluationPeriodComponent', () => {
  let component: HrmEvaluationPeriodComponent;
  let fixture: ComponentFixture<HrmEvaluationPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmEvaluationPeriodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmEvaluationPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
