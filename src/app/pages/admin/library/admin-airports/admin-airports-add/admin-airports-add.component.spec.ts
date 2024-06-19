import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAirportsAddComponent } from './admin-airports-add.component';

describe('AdminAirportsAddComponent', () => {
  let component: AdminAirportsAddComponent;
  let fixture: ComponentFixture<AdminAirportsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAirportsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAirportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
