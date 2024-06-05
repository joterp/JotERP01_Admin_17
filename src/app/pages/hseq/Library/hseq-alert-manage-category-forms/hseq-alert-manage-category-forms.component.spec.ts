import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQAlertManageCategoryFormsComponent } from './hseq-alert-manage-category-forms.component';

describe('HSEQAlertManageCategoryFormsComponent', () => {
  let component: HSEQAlertManageCategoryFormsComponent;
  let fixture: ComponentFixture<HSEQAlertManageCategoryFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQAlertManageCategoryFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQAlertManageCategoryFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
