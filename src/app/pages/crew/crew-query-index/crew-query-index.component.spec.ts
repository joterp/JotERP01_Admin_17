import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWQueryIndexComponent } from './crew-query-index.component';

describe('CREWQueryIndexComponent', () => {
  let component: CREWQueryIndexComponent;
  let fixture: ComponentFixture<CREWQueryIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWQueryIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWQueryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
