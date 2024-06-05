import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWQueriesComponent } from './crew-queries.component';

describe('CREWQueriesComponent', () => {
  let component: CREWQueriesComponent;
  let fixture: ComponentFixture<CREWQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
