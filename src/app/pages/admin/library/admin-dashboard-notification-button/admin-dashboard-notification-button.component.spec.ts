import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardNotificationButtonComponent } from './admin-dashboard-notification-button.component';

describe('AdminDashboardNotificationButtonComponent', () => {
  let component: AdminDashboardNotificationButtonComponent;
  let fixture: ComponentFixture<AdminDashboardNotificationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardNotificationButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDashboardNotificationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
