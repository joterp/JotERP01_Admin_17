import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWContactsDetailsComponent } from './crew-contacts-details.component';

describe('CREWContactsDetailsComponent', () => {
  let component: CREWContactsDetailsComponent;
  let fixture: ComponentFixture<CREWContactsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWContactsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWContactsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
