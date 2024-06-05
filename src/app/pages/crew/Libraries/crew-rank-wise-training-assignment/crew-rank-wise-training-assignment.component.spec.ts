import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWRANKWISETRAININGASSIGNMENTComponent } from './crew-rank-wise-training-assignment.component';

describe('CREWRANKWISETRAININGASSIGNMENTComponent', () => {
  let component: CREWRANKWISETRAININGASSIGNMENTComponent;
  let fixture: ComponentFixture<CREWRANKWISETRAININGASSIGNMENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWRANKWISETRAININGASSIGNMENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWRANKWISETRAININGASSIGNMENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
