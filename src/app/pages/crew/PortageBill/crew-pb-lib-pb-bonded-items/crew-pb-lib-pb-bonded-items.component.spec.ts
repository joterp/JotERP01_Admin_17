import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBLIBPBBONDEDITEMSComponent } from './crew-pb-lib-pb-bonded-items.component';

describe('CREWPBLIBPBBONDEDITEMSComponent', () => {
  let component: CREWPBLIBPBBONDEDITEMSComponent;
  let fixture: ComponentFixture<CREWPBLIBPBBONDEDITEMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBLIBPBBONDEDITEMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBLIBPBBONDEDITEMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
