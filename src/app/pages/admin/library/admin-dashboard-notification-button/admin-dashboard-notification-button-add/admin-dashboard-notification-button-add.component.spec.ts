import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardNotificationButtonAddComponent } from './admin-dashboard-notification-button-add.component';

describe('AdminDashboardNotificationButtonAddComponent', () => {
  let component: AdminDashboardNotificationButtonAddComponent;
  let fixture: ComponentFixture<AdminDashboardNotificationButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminDashboardNotificationButtonAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDashboardNotificationButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
