import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVOYAGECPLIBRARYComponent } from './ops-voyage-cp-library.component';

describe('OPSVOYAGECPLIBRARYComponent', () => {
  let component: OPSVOYAGECPLIBRARYComponent;
  let fixture: ComponentFixture<OPSVOYAGECPLIBRARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVOYAGECPLIBRARYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVOYAGECPLIBRARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
