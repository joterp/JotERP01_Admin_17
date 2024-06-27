import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGreatgrandchildAddComponent } from './admin-greatgrandchild-add.component';

describe('AdminGreatgrandchildAddComponent', () => {
  let component: AdminGreatgrandchildAddComponent;
  let fixture: ComponentFixture<AdminGreatgrandchildAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGreatgrandchildAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminGreatgrandchildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
