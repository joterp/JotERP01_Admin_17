import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFleetsComponent } from './admin-fleets.component';

describe('AdminFleetsComponent', () => {
  let component: AdminFleetsComponent;
  let fixture: ComponentFixture<AdminFleetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFleetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFleetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
