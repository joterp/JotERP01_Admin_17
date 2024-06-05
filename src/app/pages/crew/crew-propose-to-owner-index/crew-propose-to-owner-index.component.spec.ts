import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWProposeToOwnerIndexComponent } from './crew-propose-to-owner-index.component';

describe('CREWProposeToOwnerIndexComponent', () => {
  let component: CREWProposeToOwnerIndexComponent;
  let fixture: ComponentFixture<CREWProposeToOwnerIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWProposeToOwnerIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWProposeToOwnerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
