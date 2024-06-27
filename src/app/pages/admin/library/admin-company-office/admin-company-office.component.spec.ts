import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyOfficeComponent } from './admin-company-office.component';

describe('AdminCompanyOfficeComponent', () => {
  let component: AdminCompanyOfficeComponent;
  let fixture: ComponentFixture<AdminCompanyOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyOfficeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
