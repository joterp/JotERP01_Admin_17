import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSALertAreasModelComponent } from './ops-alert-areas-model.component';

describe('OPSALertAreasModelComponent', () => {
  let component: OPSALertAreasModelComponent;
  let fixture: ComponentFixture<OPSALertAreasModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSALertAreasModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSALertAreasModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
