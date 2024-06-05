import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAdditionalChecksComponent } from './crew-additional-checks.component';

describe('CREWAdditionalChecksComponent', () => {
  let component: CREWAdditionalChecksComponent;
  let fixture: ComponentFixture<CREWAdditionalChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAdditionalChecksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAdditionalChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
