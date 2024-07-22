import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmLeavesAssignmentComponent } from './hrm-leaves-assignment.component';

describe('HrmLeavesAssignmentComponent', () => {
  let component: HrmLeavesAssignmentComponent;
  let fixture: ComponentFixture<HrmLeavesAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmLeavesAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmLeavesAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
