import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNADAddVoyageLogComponent } from './ops-nad-add-voyage-log.component';

describe('OPSNADAddVoyageLogComponent', () => {
  let component: OPSNADAddVoyageLogComponent;
  let fixture: ComponentFixture<OPSNADAddVoyageLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNADAddVoyageLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNADAddVoyageLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
