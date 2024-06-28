import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyCopyHolidaysAddComponent } from './admin-company-copy-holidays-add.component';

describe('AdminCompanyCopyHolidaysAddComponent', () => {
  let component: AdminCompanyCopyHolidaysAddComponent;
  let fixture: ComponentFixture<AdminCompanyCopyHolidaysAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyCopyHolidaysAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyCopyHolidaysAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
