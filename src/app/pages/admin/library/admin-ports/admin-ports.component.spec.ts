import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortsComponent } from './admin-ports.component';

describe('AdminPortsComponent', () => {
  let component: AdminPortsComponent;
  let fixture: ComponentFixture<AdminPortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPortsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
