import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationPeriodComponent } from './crew-evaluation-period.component';

describe('CREWEvaluationPeriodComponent', () => {
  let component: CREWEvaluationPeriodComponent;
  let fixture: ComponentFixture<CREWEvaluationPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
