import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSFAMAmmunitionItemComponent } from './ops-fam-ammunition-item.component';

describe('OPSFAMAmmunitionItemComponent', () => {
  let component: OPSFAMAmmunitionItemComponent;
  let fixture: ComponentFixture<OPSFAMAmmunitionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSFAMAmmunitionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSFAMAmmunitionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
