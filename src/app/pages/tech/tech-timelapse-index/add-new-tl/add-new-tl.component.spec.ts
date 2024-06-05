import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDNEWTLComponent } from './add-new-tl.component';

describe('ADDNEWTLComponent', () => {
  let component: ADDNEWTLComponent;
  let fixture: ComponentFixture<ADDNEWTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADDNEWTLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDNEWTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
