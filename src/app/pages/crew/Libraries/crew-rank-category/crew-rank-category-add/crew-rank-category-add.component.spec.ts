import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRankCategoryAddComponent } from './crew-rank-category-add.component';

describe('CREWRankCategoryAddComponent', () => {
  let component: CREWRankCategoryAddComponent;
  let fixture: ComponentFixture<CREWRankCategoryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRankCategoryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRankCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
