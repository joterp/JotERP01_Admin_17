import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmInterviewGradeAddComponent } from './hrm-interview-grade-add.component';

describe('HrmInterviewGradeAddComponent', () => {
  let component: HrmInterviewGradeAddComponent;
  let fixture: ComponentFixture<HrmInterviewGradeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmInterviewGradeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmInterviewGradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
