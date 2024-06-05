import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWContractTemplateVesselAssignmentComponent } from './crew-contract-template-vessel-assignment.component';

describe('CREWContractTemplateVesselAssignmentComponent', () => {
  let component: CREWContractTemplateVesselAssignmentComponent;
  let fixture: ComponentFixture<CREWContractTemplateVesselAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWContractTemplateVesselAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWContractTemplateVesselAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
