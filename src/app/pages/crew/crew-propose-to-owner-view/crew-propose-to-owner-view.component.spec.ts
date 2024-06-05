import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWProposeToOwnerViewComponent } from './crew-propose-to-owner-view.component';

describe('CREWProposeToOwnerViewComponent', () => {
  let component: CREWProposeToOwnerViewComponent;
  let fixture: ComponentFixture<CREWProposeToOwnerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWProposeToOwnerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWProposeToOwnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
