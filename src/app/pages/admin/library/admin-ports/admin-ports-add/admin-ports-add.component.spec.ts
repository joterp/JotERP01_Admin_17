import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortsAddComponent } from './admin-ports-add.component';

describe('AdminPortsAddComponent', () => {
  let component: AdminPortsAddComponent;
  let fixture: ComponentFixture<AdminPortsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPortsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPortsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
