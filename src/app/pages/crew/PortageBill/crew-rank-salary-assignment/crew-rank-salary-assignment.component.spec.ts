import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankSalaryAssignmentComponent } from './crew-rank-salary-assignment.component';

describe('CREWRankSalaryAssignmentComponent', () => {
  let component: CREWRankSalaryAssignmentComponent;
  let fixture: ComponentFixture<CREWRankSalaryAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankSalaryAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankSalaryAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
