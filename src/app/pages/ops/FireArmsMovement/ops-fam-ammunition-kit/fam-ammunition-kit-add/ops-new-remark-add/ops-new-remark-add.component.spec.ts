import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSNewRemarkAddComponent } from './ops-new-remark-add.component';

describe('OPSNewRemarkAddComponent', () => {
  let component: OPSNewRemarkAddComponent;
  let fixture: ComponentFixture<OPSNewRemarkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSNewRemarkAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSNewRemarkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
