import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAddITEMTEMPLATEComponent } from './purc-add-item-template.component';

describe('PURCAddITEMTEMPLATEComponent', () => {
  let component: PURCAddITEMTEMPLATEComponent;
  let fixture: ComponentFixture<PURCAddITEMTEMPLATEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAddITEMTEMPLATEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAddITEMTEMPLATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
