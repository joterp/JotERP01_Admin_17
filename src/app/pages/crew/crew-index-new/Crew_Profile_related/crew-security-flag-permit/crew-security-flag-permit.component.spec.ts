import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWSecurityFlagPermitComponent } from './crew-security-flag-permit.component';

describe('CREWSecurityFlagPermitComponent', () => {
  let component: CREWSecurityFlagPermitComponent;
  let fixture: ComponentFixture<CREWSecurityFlagPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWSecurityFlagPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWSecurityFlagPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
