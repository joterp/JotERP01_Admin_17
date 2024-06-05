import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWCOVIDTestAddModalComponent } from './crew-covid-test-add-modal.component';

describe('CREWCOVIDTestAddModalComponent', () => {
  let component: CREWCOVIDTestAddModalComponent;
  let fixture: ComponentFixture<CREWCOVIDTestAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWCOVIDTestAddModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWCOVIDTestAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
