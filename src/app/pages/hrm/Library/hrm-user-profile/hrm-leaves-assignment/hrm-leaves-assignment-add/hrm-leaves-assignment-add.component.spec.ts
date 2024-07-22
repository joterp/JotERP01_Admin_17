import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmLeavesAssignmentAddComponent } from './hrm-leaves-assignment-add.component';

describe('HrmLeavesAssignmentAddComponent', () => {
  let component: HrmLeavesAssignmentAddComponent;
  let fixture: ComponentFixture<HrmLeavesAssignmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmLeavesAssignmentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmLeavesAssignmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
