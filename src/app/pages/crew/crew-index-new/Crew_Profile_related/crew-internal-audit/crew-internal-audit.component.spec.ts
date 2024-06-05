import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWInternalAuditComponent } from './crew-internal-audit.component';

describe('CREWInternalAuditComponent', () => {
  let component: CREWInternalAuditComponent;
  let fixture: ComponentFixture<CREWInternalAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWInternalAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWInternalAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
