import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCategoriesEditComponent } from './survey-categories-edit.component';

describe('SurveyCategoriesEditComponent', () => {
  let component: SurveyCategoriesEditComponent;
  let fixture: ComponentFixture<SurveyCategoriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyCategoriesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCategoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
