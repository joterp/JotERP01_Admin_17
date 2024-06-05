import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWLIBTrainingRankAssignmentComponent } from './crew-lib-training-rank-assignment.component';

describe('CREWLIBTrainingRankAssignmentComponent', () => {
  let component: CREWLIBTrainingRankAssignmentComponent;
  let fixture: ComponentFixture<CREWLIBTrainingRankAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWLIBTrainingRankAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWLIBTrainingRankAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
