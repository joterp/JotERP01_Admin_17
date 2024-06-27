import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyOfficeAddComponent } from './admin-company-office-add.component';

describe('AdminCompanyOfficeAddComponent', () => {
  let component: AdminCompanyOfficeAddComponent;
  let fixture: ComponentFixture<AdminCompanyOfficeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompanyOfficeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompanyOfficeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
