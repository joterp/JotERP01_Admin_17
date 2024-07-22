import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmContractTemplateComponent } from './hrm-contract-template.component';

describe('HrmContractTemplateComponent', () => {
  let component: HrmContractTemplateComponent;
  let fixture: ComponentFixture<HrmContractTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmContractTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmContractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
