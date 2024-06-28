import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageAlertAddComponent } from './admin-manage-alert-add.component';

describe('AdminManageAlertAddComponent', () => {
  let component: AdminManageAlertAddComponent;
  let fixture: ComponentFixture<AdminManageAlertAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManageAlertAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminManageAlertAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
