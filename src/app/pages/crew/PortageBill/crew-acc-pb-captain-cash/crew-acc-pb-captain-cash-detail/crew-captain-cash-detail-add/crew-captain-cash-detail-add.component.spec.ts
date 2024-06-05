import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCaptainCashDetailAddComponent } from './crew-captain-cash-detail-add.component';

describe('CREWCaptainCashDetailAddComponent', () => {
  let component: CREWCaptainCashDetailAddComponent;
  let fixture: ComponentFixture<CREWCaptainCashDetailAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCaptainCashDetailAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCaptainCashDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
