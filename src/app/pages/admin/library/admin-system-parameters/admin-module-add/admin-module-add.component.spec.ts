import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModuleAddComponent } from './admin-module-add.component';

describe('AdminModuleAddComponent', () => {
  let component: AdminModuleAddComponent;
  let fixture: ComponentFixture<AdminModuleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminModuleAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminModuleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
