import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankAddComponent } from './crew-rank-add.component';

describe('CREWRankAddComponent', () => {
  let component: CREWRankAddComponent;
  let fixture: ComponentFixture<CREWRankAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
