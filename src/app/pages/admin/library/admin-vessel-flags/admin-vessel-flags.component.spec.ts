import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVesselFlagsComponent } from './admin-vessel-flags.component';

describe('AdminVesselFlagsComponent', () => {
  let component: AdminVesselFlagsComponent;
  let fixture: ComponentFixture<AdminVesselFlagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminVesselFlagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminVesselFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
