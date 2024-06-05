import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAssignToVesselComponent } from './crew-assign-to-vessel.component';

describe('CREWAssignToVesselComponent', () => {
  let component: CREWAssignToVesselComponent;
  let fixture: ComponentFixture<CREWAssignToVesselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAssignToVesselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAssignToVesselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
