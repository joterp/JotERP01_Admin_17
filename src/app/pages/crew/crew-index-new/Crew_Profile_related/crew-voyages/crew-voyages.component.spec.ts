import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWVoyagesComponent } from './crew-voyages.component';

describe('CREWVoyagesComponent', () => {
  let component: CREWVoyagesComponent;
  let fixture: ComponentFixture<CREWVoyagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWVoyagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
