import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankAssignmentComponent } from './crew-rank-assignment.component';

describe('CREWRankAssignmentComponent', () => {
  let component: CREWRankAssignmentComponent;
  let fixture: ComponentFixture<CREWRankAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
