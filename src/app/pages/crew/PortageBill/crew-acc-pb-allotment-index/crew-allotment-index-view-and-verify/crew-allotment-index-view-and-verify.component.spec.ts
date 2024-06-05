import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAllotmentIndexViewAndVerifyComponent } from './crew-allotment-index-view-and-verify.component';

describe('CREWAllotmentIndexViewAndVerifyComponent', () => {
  let component: CREWAllotmentIndexViewAndVerifyComponent;
  let fixture: ComponentFixture<CREWAllotmentIndexViewAndVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAllotmentIndexViewAndVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAllotmentIndexViewAndVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
