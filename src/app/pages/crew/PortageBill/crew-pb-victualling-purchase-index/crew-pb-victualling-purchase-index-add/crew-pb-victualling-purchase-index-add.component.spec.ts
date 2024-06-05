import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBVictuallingPurchaseIndexAddComponent } from './crew-pb-victualling-purchase-index-add.component';

describe('CREWPBVictuallingPurchaseIndexAddComponent', () => {
  let component: CREWPBVictuallingPurchaseIndexAddComponent;
  let fixture: ComponentFixture<CREWPBVictuallingPurchaseIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBVictuallingPurchaseIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBVictuallingPurchaseIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
