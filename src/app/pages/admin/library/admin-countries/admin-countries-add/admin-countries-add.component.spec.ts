import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCountriesAddComponent } from './admin-countries-add.component';

describe('AdminCountriesAddComponent', () => {
  let component: AdminCountriesAddComponent;
  let fixture: ComponentFixture<AdminCountriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCountriesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCountriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
