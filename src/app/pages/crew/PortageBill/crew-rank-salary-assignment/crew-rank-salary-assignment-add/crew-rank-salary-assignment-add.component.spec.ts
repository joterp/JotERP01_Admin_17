import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankSalaryAssignmentAddComponent } from './crew-rank-salary-assignment-add.component';

describe('CREWRankSalaryAssignmentAddComponent', () => {
  let component: CREWRankSalaryAssignmentAddComponent;
  let fixture: ComponentFixture<CREWRankSalaryAssignmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankSalaryAssignmentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankSalaryAssignmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
