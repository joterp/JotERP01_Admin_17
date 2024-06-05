import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSADDNEWVOYAGECARGOComponent } from './ops-add-new-voyage-cargo.component';

describe('OPSADDNEWVOYAGECARGOComponent', () => {
  let component: OPSADDNEWVOYAGECARGOComponent;
  let fixture: ComponentFixture<OPSADDNEWVOYAGECARGOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSADDNEWVOYAGECARGOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSADDNEWVOYAGECARGOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
