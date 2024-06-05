import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWSignoffReasonComponent } from './crew-signoff-reason.component';

describe('CREWSignoffReasonComponent', () => {
  let component: CREWSignoffReasonComponent;
  let fixture: ComponentFixture<CREWSignoffReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWSignoffReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWSignoffReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
