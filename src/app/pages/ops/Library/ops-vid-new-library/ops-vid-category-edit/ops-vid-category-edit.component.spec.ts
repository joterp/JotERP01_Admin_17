import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDCategoryEditComponent } from './ops-vid-category-edit.component';

describe('OPSVIDCategoryEditComponent', () => {
  let component: OPSVIDCategoryEditComponent;
  let fixture: ComponentFixture<OPSVIDCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDCategoryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
