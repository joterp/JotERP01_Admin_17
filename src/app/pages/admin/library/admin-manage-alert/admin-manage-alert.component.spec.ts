import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAlertComponent } from './admin-manage-alert.component';

describe('AdminManageAlertComponent', () => {
  let component: AdminManageAlertComponent;
  let fixture: ComponentFixture<AdminManageAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManageAlertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminManageAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
