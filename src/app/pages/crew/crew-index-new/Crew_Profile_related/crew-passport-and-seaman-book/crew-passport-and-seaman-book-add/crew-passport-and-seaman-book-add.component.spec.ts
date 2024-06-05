import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPassportAndSeamanBookAddComponent } from './crew-passport-and-seaman-book-add.component';

describe('CREWPassportAndSeamanBookAddComponent', () => {
  let component: CREWPassportAndSeamanBookAddComponent;
  let fixture: ComponentFixture<CREWPassportAndSeamanBookAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPassportAndSeamanBookAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPassportAndSeamanBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
