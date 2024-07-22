import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmContractTemplateAddComponent } from './hrm-contract-template-add.component';

describe('HrmContractTemplateAddComponent', () => {
  let component: HrmContractTemplateAddComponent;
  let fixture: ComponentFixture<HrmContractTemplateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmContractTemplateAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmContractTemplateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
