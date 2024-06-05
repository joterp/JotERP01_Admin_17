import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQAlertManageCategoryFormsAddComponent } from './hseq-alert-manage-category-forms-add.component';

describe('HSEQAlertManageCategoryFormsAddComponent', () => {
  let component: HSEQAlertManageCategoryFormsAddComponent;
  let fixture: ComponentFixture<HSEQAlertManageCategoryFormsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQAlertManageCategoryFormsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQAlertManageCategoryFormsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
