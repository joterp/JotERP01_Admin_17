import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCitiesAddComponent } from './admin-cities-add.component';

describe('AdminCitiesAddComponent', () => {
  let component: AdminCitiesAddComponent;
  let fixture: ComponentFixture<AdminCitiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCitiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
