import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDefectListIndexAddComponent } from './tech-defect-list-index-add.component';

describe('TECHDefectListIndexAddComponent', () => {
  let component: TECHDefectListIndexAddComponent;
  let fixture: ComponentFixture<TECHDefectListIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDefectListIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDefectListIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
