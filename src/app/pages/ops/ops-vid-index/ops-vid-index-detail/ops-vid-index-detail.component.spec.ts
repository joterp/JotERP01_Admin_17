import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSVIDIndexDetailComponent } from './ops-vid-index-detail.component';

describe('OPSVIDIndexDetailComponent', () => {
  let component: OPSVIDIndexDetailComponent;
  let fixture: ComponentFixture<OPSVIDIndexDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSVIDIndexDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSVIDIndexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
