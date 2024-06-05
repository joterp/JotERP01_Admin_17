import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInterviewGradeComponent } from './crew-interview-grade.component';

describe('CREWInterviewGradeComponent', () => {
  let component: CREWInterviewGradeComponent;
  let fixture: ComponentFixture<CREWInterviewGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInterviewGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInterviewGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
