import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWEvaluationCalenderComponent } from './crew-evaluation-calender.component';

describe('CREWEvaluationCalenderComponent', () => {
  let component: CREWEvaluationCalenderComponent;
  let fixture: ComponentFixture<CREWEvaluationCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWEvaluationCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWEvaluationCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
