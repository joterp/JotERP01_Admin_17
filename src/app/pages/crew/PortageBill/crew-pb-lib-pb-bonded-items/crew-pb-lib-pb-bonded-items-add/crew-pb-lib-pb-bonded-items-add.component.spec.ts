import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBLIBPBBONDEDITEMSAddComponent } from './crew-pb-lib-pb-bonded-items-add.component';

describe('CREWPBLIBPBBONDEDITEMSAddComponent', () => {
  let component: CREWPBLIBPBBONDEDITEMSAddComponent;
  let fixture: ComponentFixture<CREWPBLIBPBBONDEDITEMSAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBLIBPBBONDEDITEMSAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBLIBPBBONDEDITEMSAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
