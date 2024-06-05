import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBLIBPBVICTUALLINGComponent } from './crew-pb-lib-pb-victualling.component';

describe('CREWPBLIBPBVICTUALLINGComponent', () => {
  let component: CREWPBLIBPBVICTUALLINGComponent;
  let fixture: ComponentFixture<CREWPBLIBPBVICTUALLINGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBLIBPBVICTUALLINGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBLIBPBVICTUALLINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
