import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SURVEYCategoriesComponent } from './survey-categories.component';

describe('SURVEYCategoriesComponent', () => {
  let component: SURVEYCategoriesComponent;
  let fixture: ComponentFixture<SURVEYCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SURVEYCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SURVEYCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
