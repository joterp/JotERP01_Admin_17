import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSQuestionHistoryComponent } from './ops-question-history.component';

describe('OPSQuestionHistoryComponent', () => {
  let component: OPSQuestionHistoryComponent;
  let fixture: ComponentFixture<OPSQuestionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSQuestionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSQuestionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
