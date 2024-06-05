import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCDepartmentComponent } from './purc-department.component';

describe('PURCDepartmentComponent', () => {
  let component: PURCDepartmentComponent;
  let fixture: ComponentFixture<PURCDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
