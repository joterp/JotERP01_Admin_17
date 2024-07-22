import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmLeavesStandardsAddComponent } from './hrm-leaves-standards-add.component';

describe('HrmLeavesStandardsAddComponent', () => {
  let component: HrmLeavesStandardsAddComponent;
  let fixture: ComponentFixture<HrmLeavesStandardsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmLeavesStandardsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmLeavesStandardsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
