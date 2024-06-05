import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcLocationSFIListComponent } from './purc-location-sfi-list.component';

describe('PurcLocationSFIListComponent', () => {
  let component: PurcLocationSFIListComponent;
  let fixture: ComponentFixture<PurcLocationSFIListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcLocationSFIListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcLocationSFIListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
