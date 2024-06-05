import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBNADCustomFieldsAssignmentComponent } from './ops-lib-nad-custom-fields-assignment.component';

describe('OPSLIBNADCustomFieldsAssignmentComponent', () => {
  let component: OPSLIBNADCustomFieldsAssignmentComponent;
  let fixture: ComponentFixture<OPSLIBNADCustomFieldsAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBNADCustomFieldsAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBNADCustomFieldsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
