import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TECHDefectListIndexEditComponent } from './tech-defect-list-index-edit.component';

describe('TECHDefectListIndexEditComponent', () => {
  let component: TECHDefectListIndexEditComponent;
  let fixture: ComponentFixture<TECHDefectListIndexEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TECHDefectListIndexEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TECHDefectListIndexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
