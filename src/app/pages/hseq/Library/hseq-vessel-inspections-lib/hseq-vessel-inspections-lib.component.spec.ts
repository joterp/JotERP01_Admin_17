import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSEQVESSELINSPECTIONSLIBComponent } from './hseq-vessel-inspections-lib.component';

describe('HSEQVESSELINSPECTIONSLIBComponent', () => {
  let component: HSEQVESSELINSPECTIONSLIBComponent;
  let fixture: ComponentFixture<HSEQVESSELINSPECTIONSLIBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSEQVESSELINSPECTIONSLIBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HSEQVESSELINSPECTIONSLIBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
