import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPaySlipsComponent } from './crew-pay-slips.component';

describe('CREWPaySlipsComponent', () => {
  let component: CREWPaySlipsComponent;
  let fixture: ComponentFixture<CREWPaySlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPaySlipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPaySlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
