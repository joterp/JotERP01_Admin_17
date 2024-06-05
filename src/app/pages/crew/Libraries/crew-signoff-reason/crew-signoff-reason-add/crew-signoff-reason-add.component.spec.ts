import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWSignoffReasonAddComponent } from './crew-signoff-reason-add.component';

describe('CREWSignoffReasonAddComponent', () => {
  let component: CREWSignoffReasonAddComponent;
  let fixture: ComponentFixture<CREWSignoffReasonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWSignoffReasonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWSignoffReasonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
