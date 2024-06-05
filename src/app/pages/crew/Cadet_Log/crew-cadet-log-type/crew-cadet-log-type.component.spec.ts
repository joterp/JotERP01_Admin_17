import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogTypeComponent } from './crew-cadet-log-type.component';

describe('CREWCadetLogTypeComponent', () => {
  let component: CREWCadetLogTypeComponent;
  let fixture: ComponentFixture<CREWCadetLogTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
