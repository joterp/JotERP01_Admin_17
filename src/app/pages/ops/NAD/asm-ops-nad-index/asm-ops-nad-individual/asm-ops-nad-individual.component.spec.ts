import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASMOPSNADINDIVIDUALComponent } from './asm-ops-nad-individual.component';

describe('ASMOPSNADINDIVIDUALComponent', () => {
  let component: ASMOPSNADINDIVIDUALComponent;
  let fixture: ComponentFixture<ASMOPSNADINDIVIDUALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASMOPSNADINDIVIDUALComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASMOPSNADINDIVIDUALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
