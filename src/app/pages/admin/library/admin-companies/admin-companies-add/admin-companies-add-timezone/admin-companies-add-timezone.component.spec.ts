import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompaniesAddTimezoneComponent } from './admin-companies-add-timezone.component';

describe('AdminCompaniesAddTimezoneComponent', () => {
  let component: AdminCompaniesAddTimezoneComponent;
  let fixture: ComponentFixture<AdminCompaniesAddTimezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCompaniesAddTimezoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCompaniesAddTimezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
