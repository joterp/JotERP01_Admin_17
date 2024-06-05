import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSCARGOLOGMAINComponent } from './ops-cargo-log-main.component';

describe('OPSCARGOLOGMAINComponent', () => {
  let component: OPSCARGOLOGMAINComponent;
  let fixture: ComponentFixture<OPSCARGOLOGMAINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSCARGOLOGMAINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSCARGOLOGMAINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
