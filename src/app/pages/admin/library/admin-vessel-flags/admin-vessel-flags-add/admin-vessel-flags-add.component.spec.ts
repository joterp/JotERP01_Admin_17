import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVesselFlagsAddComponent } from './admin-vessel-flags-add.component';

describe('AdminVesselFlagsAddComponent', () => {
  let component: AdminVesselFlagsAddComponent;
  let fixture: ComponentFixture<AdminVesselFlagsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVesselFlagsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVesselFlagsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
