import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPassportAndSeamanBookComponent } from './crew-passport-and-seaman-book.component';

describe('CREWPassportAndSeamanBookComponent', () => {
  let component: CREWPassportAndSeamanBookComponent;
  let fixture: ComponentFixture<CREWPassportAndSeamanBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPassportAndSeamanBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPassportAndSeamanBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
