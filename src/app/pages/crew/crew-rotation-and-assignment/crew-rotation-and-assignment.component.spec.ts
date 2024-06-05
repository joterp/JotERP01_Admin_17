import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRotationAndAssignmentComponent } from './crew-rotation-and-assignment.component';

describe('CREWRotationAndAssignmentComponent', () => {
  let component: CREWRotationAndAssignmentComponent;
  let fixture: ComponentFixture<CREWRotationAndAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRotationAndAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRotationAndAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
