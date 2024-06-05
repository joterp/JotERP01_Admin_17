import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBVictuallingPurchaseIndexComponent } from './crew-pb-victualling-purchase-index.component';

describe('CREWPBVictuallingPurchaseIndexComponent', () => {
  let component: CREWPBVictuallingPurchaseIndexComponent;
  let fixture: ComponentFixture<CREWPBVictuallingPurchaseIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBVictuallingPurchaseIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBVictuallingPurchaseIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
