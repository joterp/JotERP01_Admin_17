import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLibVesselsAddComponent } from './admin-lib-vessels-add.component';

describe('AdminLibVesselsAddComponent', () => {
  let component: AdminLibVesselsAddComponent;
  let fixture: ComponentFixture<AdminLibVesselsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLibVesselsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLibVesselsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
