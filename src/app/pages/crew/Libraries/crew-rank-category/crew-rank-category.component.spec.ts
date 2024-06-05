import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankCategoryComponent } from './crew-rank-category.component';

describe('CREWRankCategoryComponent', () => {
  let component: CREWRankCategoryComponent;
  let fixture: ComponentFixture<CREWRankCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
