import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDLIBTypesComponent } from './ops-vid-lib-types.component';

describe('OPSVIDLIBTypesComponent', () => {
  let component: OPSVIDLIBTypesComponent;
  let fixture: ComponentFixture<OPSVIDLIBTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDLIBTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDLIBTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
