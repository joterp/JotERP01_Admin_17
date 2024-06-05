import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAdditionalChecksAddComponent } from './crew-additional-checks-add.component';

describe('CREWAdditionalChecksAddComponent', () => {
  let component: CREWAdditionalChecksAddComponent;
  let fixture: ComponentFixture<CREWAdditionalChecksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAdditionalChecksAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAdditionalChecksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
