import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWContractTemplateIndexComponent } from './crew-contract-template-index.component';

describe('CREWContractTemplateIndexComponent', () => {
  let component: CREWContractTemplateIndexComponent;
  let fixture: ComponentFixture<CREWContractTemplateIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWContractTemplateIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWContractTemplateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
