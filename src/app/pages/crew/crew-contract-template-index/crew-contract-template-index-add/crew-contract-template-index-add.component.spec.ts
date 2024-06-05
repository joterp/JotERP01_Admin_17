import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWContractTemplateIndexAddComponent } from './crew-contract-template-index-add.component';

describe('CREWContractTemplateIndexAddComponent', () => {
  let component: CREWContractTemplateIndexAddComponent;
  let fixture: ComponentFixture<CREWContractTemplateIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWContractTemplateIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWContractTemplateIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
