import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewGradeComponent } from './hrm-interview-grade.component';

describe('HrmInterviewGradeComponent', () => {
  let component: HrmInterviewGradeComponent;
  let fixture: ComponentFixture<HrmInterviewGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
