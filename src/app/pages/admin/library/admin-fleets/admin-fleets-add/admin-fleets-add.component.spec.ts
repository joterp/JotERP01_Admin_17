import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFleetsAddComponent } from './admin-fleets-add.component';

describe('AdminFleetsAddComponent', () => {
  let component: AdminFleetsAddComponent;
  let fixture: ComponentFixture<AdminFleetsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFleetsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFleetsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
