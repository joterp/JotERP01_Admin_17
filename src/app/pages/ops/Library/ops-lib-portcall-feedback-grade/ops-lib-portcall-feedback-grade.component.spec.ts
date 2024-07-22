import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibPortcallFeedbackGradeComponent } from './ops-lib-portcall-feedback-grade.component';

describe('OpsLibPortcallFeedbackGradeComponent', () => {
  let component: OpsLibPortcallFeedbackGradeComponent;
  let fixture: ComponentFixture<OpsLibPortcallFeedbackGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibPortcallFeedbackGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibPortcallFeedbackGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
