import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogCategoriesAddComponent } from './crew-cadet-log-categories-add.component';

describe('CREWCadetLogCategoriesAddComponent', () => {
  let component: CREWCadetLogCategoriesAddComponent;
  let fixture: ComponentFixture<CREWCadetLogCategoriesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogCategoriesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogCategoriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
