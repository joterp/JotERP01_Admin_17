import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInterviewGradeAddComponent } from './crewinterview-grade-add.component';

describe('CREWInterviewGradeAddComponent', () => {
  let component: CREWInterviewGradeAddComponent;
  let fixture: ComponentFixture<CREWInterviewGradeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInterviewGradeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInterviewGradeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
