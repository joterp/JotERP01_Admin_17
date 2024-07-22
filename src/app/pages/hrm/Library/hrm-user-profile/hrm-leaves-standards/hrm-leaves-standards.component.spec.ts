import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmLeavesStandardsComponent } from './hrm-leaves-standards.component';

describe('HrmLeavesStandardsComponent', () => {
  let component: HrmLeavesStandardsComponent;
  let fixture: ComponentFixture<HrmLeavesStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmLeavesStandardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmLeavesStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
