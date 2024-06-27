import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGrandchildAddComponent } from './admin-grandchild-add.component';

describe('AdminGrandchildAddComponent', () => {
  let component: AdminGrandchildAddComponent;
  let fixture: ComponentFixture<AdminGrandchildAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGrandchildAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminGrandchildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
