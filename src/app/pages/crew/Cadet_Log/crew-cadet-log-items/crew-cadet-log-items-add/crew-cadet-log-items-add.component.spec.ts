import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCadetLogItemsAddComponent } from './crew-cadet-log-items-add.component';

describe('CREWCadetLogItemsAddComponent', () => {
  let component: CREWCadetLogItemsAddComponent;
  let fixture: ComponentFixture<CREWCadetLogItemsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCadetLogItemsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCadetLogItemsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
