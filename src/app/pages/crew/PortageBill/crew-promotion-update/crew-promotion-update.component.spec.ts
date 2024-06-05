import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPromotionUpdateComponent } from './crew-promotion-update.component';

describe('CREWPromotionUpdateComponent', () => {
  let component: CREWPromotionUpdateComponent;
  let fixture: ComponentFixture<CREWPromotionUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPromotionUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPromotionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
