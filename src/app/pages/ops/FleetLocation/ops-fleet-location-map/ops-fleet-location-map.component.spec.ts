import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSFleetLocationMapComponent } from './ops-fleet-location-map.component';

describe('OPSFleetLocationMapComponent', () => {
  let component: OPSFleetLocationMapComponent;
  let fixture: ComponentFixture<OPSFleetLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSFleetLocationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSFleetLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
