import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogCategoriesComponent } from './crew-cadet-log-categories.component';

describe('CREWCadetLogCategoriesComponent', () => {
  let component: CREWCadetLogCategoriesComponent;
  let fixture: ComponentFixture<CREWCadetLogCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
