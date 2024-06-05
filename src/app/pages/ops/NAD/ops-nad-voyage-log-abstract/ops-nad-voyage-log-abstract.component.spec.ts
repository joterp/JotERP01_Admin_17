import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADVoyageLogAbstractComponent } from './ops-nad-voyage-log-abstract.component';

describe('OPSNADVoyageLogAbstractComponent', () => {
  let component: OPSNADVoyageLogAbstractComponent;
  let fixture: ComponentFixture<OPSNADVoyageLogAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADVoyageLogAbstractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADVoyageLogAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
