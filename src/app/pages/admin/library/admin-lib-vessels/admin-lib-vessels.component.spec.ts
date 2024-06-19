import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLibVesselsComponent } from './admin-lib-vessels.component';

describe('AdminLibVesselsComponent', () => {
  let component: AdminLibVesselsComponent;
  let fixture: ComponentFixture<AdminLibVesselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLibVesselsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLibVesselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
