import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDLIBCatagariesComponent } from './ops-vid-lib-catagaries.component';

describe('OPSVIDLIBCatagariesComponent', () => {
  let component: OPSVIDLIBCatagariesComponent;
  let fixture: ComponentFixture<OPSVIDLIBCatagariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDLIBCatagariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDLIBCatagariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
