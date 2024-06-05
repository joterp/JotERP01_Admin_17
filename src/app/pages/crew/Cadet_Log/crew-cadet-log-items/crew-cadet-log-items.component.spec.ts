import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogItemsComponent } from './crew-cadet-log-items.component';

describe('CREWCadetLogItemsComponent', () => {
  let component: CREWCadetLogItemsComponent;
  let fixture: ComponentFixture<CREWCadetLogItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
