import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSBunkerROBsModalComponent } from './ops-bunker-robs-modal.component';

describe('OPSBunkerROBsModalComponent', () => {
  let component: OPSBunkerROBsModalComponent;
  let fixture: ComponentFixture<OPSBunkerROBsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSBunkerROBsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSBunkerROBsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
