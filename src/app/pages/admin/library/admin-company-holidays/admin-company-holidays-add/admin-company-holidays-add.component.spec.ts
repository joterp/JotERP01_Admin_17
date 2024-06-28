import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyHolidaysAddComponent } from './admin-company-holidays-add.component';

describe('AdminCompanyHolidaysAddComponent', () => {
  let component: AdminCompanyHolidaysAddComponent;
  let fixture: ComponentFixture<AdminCompanyHolidaysAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyHolidaysAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyHolidaysAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
