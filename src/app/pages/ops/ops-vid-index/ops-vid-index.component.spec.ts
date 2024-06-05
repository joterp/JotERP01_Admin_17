import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDIndexComponent } from './ops-vid-index.component';

describe('OPSVIDIndexComponent', () => {
  let component: OPSVIDIndexComponent;
  let fixture: ComponentFixture<OPSVIDIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
