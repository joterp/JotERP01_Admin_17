import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQISPSSecurityDrillAddComponent } from './hseq-isps-security-drill-add.component';

describe('HSEQISPSSecurityDrillAddComponent', () => {
  let component: HSEQISPSSecurityDrillAddComponent;
  let fixture: ComponentFixture<HSEQISPSSecurityDrillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQISPSSecurityDrillAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQISPSSecurityDrillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
