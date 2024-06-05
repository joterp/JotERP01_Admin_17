import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationPeriodAddComponent } from './crew-evaluation-period-add.component';

describe('CREWEvaluationPeriodAddComponent', () => {
  let component: CREWEvaluationPeriodAddComponent;
  let fixture: ComponentFixture<CREWEvaluationPeriodAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationPeriodAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationPeriodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
