import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWProposeToOwnerComponent } from './crew-propose-to-owner.component';

describe('CREWProposeToOwnerComponent', () => {
  let component: CREWProposeToOwnerComponent;
  let fixture: ComponentFixture<CREWProposeToOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWProposeToOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWProposeToOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
