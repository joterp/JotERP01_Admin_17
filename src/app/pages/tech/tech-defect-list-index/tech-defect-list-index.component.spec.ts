import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDefectListIndexComponent } from './tech-defect-list-index.component';

describe('TECHDefectListIndexComponent', () => {
  let component: TECHDefectListIndexComponent;
  let fixture: ComponentFixture<TECHDefectListIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDefectListIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDefectListIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
