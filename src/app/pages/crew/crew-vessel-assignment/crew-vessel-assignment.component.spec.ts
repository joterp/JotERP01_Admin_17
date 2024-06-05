import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWVesselAssignmentComponent } from './crew-vessel-assignment.component';

describe('CREWVesselAssignmentComponent', () => {
  let component: CREWVesselAssignmentComponent;
  let fixture: ComponentFixture<CREWVesselAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWVesselAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWVesselAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
