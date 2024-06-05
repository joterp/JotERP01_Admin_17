import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankVesselAssignmentComponent } from './crew-rank-vessel-assignment.component';

describe('CREWRankVesselAssignmentComponent', () => {
  let component: CREWRankVesselAssignmentComponent;
  let fixture: ComponentFixture<CREWRankVesselAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankVesselAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankVesselAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
