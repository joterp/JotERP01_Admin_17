import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSLIBOMRPRODUCTComponent } from './ops-lib-omr-product.component';

describe('OPSLIBOMRPRODUCTComponent', () => {
  let component: OPSLIBOMRPRODUCTComponent;
  let fixture: ComponentFixture<OPSLIBOMRPRODUCTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSLIBOMRPRODUCTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSLIBOMRPRODUCTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
