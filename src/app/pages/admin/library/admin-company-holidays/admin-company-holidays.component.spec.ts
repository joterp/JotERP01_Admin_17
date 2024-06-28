import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyHolidaysComponent } from './admin-company-holidays.component';

describe('AdminCompanyHolidaysComponent', () => {
  let component: AdminCompanyHolidaysComponent;
  let fixture: ComponentFixture<AdminCompanyHolidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyHolidaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
