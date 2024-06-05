import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSSelectSFIsComponent } from './ops-select-sfis.component';

describe('OPSSelectSFIsComponent', () => {
  let component: OPSSelectSFIsComponent;
  let fixture: ComponentFixture<OPSSelectSFIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSSelectSFIsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSSelectSFIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
