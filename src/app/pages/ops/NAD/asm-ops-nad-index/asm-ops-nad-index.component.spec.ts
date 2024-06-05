import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASMOPSNADIndexComponent } from './asm-ops-nad-index.component';

describe('ASMOPSNADIndexComponent', () => {
  let component: ASMOPSNADIndexComponent;
  let fixture: ComponentFixture<ASMOPSNADIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASMOPSNADIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASMOPSNADIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
