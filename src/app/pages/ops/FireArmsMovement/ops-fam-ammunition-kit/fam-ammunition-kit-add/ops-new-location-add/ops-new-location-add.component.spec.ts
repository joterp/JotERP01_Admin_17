import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNewLocationAddComponent } from './ops-new-location-add.component';

describe('OPSNewLocationAddComponent', () => {
  let component: OPSNewLocationAddComponent;
  let fixture: ComponentFixture<OPSNewLocationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNewLocationAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNewLocationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
