import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNewPermitAddComponent } from './ops-new-permit-add.component';

describe('OPSNewPermitAddComponent', () => {
  let component: OPSNewPermitAddComponent;
  let fixture: ComponentFixture<OPSNewPermitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNewPermitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNewPermitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
