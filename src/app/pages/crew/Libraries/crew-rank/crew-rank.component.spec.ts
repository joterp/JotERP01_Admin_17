import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankComponent } from './crew-rank.component';

describe('CREWRankComponent', () => {
  let component: CREWRankComponent;
  let fixture: ComponentFixture<CREWRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
