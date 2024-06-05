import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNewItemModalComponent } from './ops-new-item-modal.component';

describe('OPSNewItemModalComponent', () => {
  let component: OPSNewItemModalComponent;
  let fixture: ComponentFixture<OPSNewItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNewItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNewItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
