import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCContractModuleComponent } from './purc-contract-module.component';

describe('PURCContractModuleComponent', () => {
  let component: PURCContractModuleComponent;
  let fixture: ComponentFixture<PURCContractModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCContractModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCContractModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
