import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParentAddComponent } from './admin-parent-add.component';

describe('AdminParentAddComponent', () => {
  let component: AdminParentAddComponent;
  let fixture: ComponentFixture<AdminParentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminParentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminParentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
