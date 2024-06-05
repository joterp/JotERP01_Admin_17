import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLibNadCustomFieldsComponent } from './ops-lib-nad-custom-fields.component';

describe('OPSLibNadCustomFieldsComponent', () => {
  let component: OPSLibNadCustomFieldsComponent;
  let fixture: ComponentFixture<OPSLibNadCustomFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLibNadCustomFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLibNadCustomFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
