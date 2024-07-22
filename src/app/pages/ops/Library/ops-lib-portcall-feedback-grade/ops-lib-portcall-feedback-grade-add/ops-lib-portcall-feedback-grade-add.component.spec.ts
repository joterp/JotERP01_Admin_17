import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsLibPortcallFeedbackGradeAddComponent } from './ops-lib-portcall-feedback-grade-add.component';

describe('OpsLibPortcallFeedbackGradeAddComponent', () => {
  let component: OpsLibPortcallFeedbackGradeAddComponent;
  let fixture: ComponentFixture<OpsLibPortcallFeedbackGradeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsLibPortcallFeedbackGradeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsLibPortcallFeedbackGradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
