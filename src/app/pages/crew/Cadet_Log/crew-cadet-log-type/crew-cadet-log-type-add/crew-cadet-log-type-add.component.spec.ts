import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogTypeAddComponent } from './crew-cadet-log-type-add.component';

describe('CREWCadetLogTypeAddComponent', () => {
  let component: CREWCadetLogTypeAddComponent;
  let fixture: ComponentFixture<CREWCadetLogTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
