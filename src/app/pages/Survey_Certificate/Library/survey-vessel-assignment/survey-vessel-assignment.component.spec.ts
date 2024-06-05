import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYVesselAssignmentComponent } from './survey-vessel-assignment.component';

describe('SURVEYVesselAssignmentComponent', () => {
  let component: SURVEYVesselAssignmentComponent;
  let fixture: ComponentFixture<SURVEYVesselAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYVesselAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYVesselAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
