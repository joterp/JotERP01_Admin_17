import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWMatrixIndexComponent } from './crew-matrix-index.component';

describe('CREWMatrixIndexComponent', () => {
  let component: CREWMatrixIndexComponent;
  let fixture: ComponentFixture<CREWMatrixIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWMatrixIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWMatrixIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
