import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLibNadCustomFieldsAddComponent } from './ops-lib-nad-custom-fields-add.component';

describe('OPSLibNadCustomFieldsAddComponent', () => {
  let component: OPSLibNadCustomFieldsAddComponent;
  let fixture: ComponentFixture<OPSLibNadCustomFieldsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLibNadCustomFieldsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLibNadCustomFieldsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
