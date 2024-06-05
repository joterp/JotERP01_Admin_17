import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDNEWLIBRARYComponent } from './ops-vid-new-library.component';

describe('OPSVIDNEWLIBRARYComponent', () => {
  let component: OPSVIDNEWLIBRARYComponent;
  let fixture: ComponentFixture<OPSVIDNEWLIBRARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDNEWLIBRARYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDNEWLIBRARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
