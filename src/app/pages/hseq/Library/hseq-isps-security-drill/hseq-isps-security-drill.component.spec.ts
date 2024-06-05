import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQISPSSecurityDrillComponent } from './hseq-isps-security-drill.component';

describe('HSEQISPSSecurityDrillComponent', () => {
  let component: HSEQISPSSecurityDrillComponent;
  let fixture: ComponentFixture<HSEQISPSSecurityDrillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQISPSSecurityDrillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQISPSSecurityDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
