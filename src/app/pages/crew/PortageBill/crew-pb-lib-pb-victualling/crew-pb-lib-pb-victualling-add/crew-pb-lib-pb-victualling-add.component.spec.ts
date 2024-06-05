import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWPBLIBPBVICTUALLINGAddComponent } from './crew-pb-lib-pb-victualling-add.component';

describe('CREWPBLIBPBVICTUALLINGAddComponent', () => {
  let component: CREWPBLIBPBVICTUALLINGAddComponent;
  let fixture: ComponentFixture<CREWPBLIBPBVICTUALLINGAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWPBLIBPBVICTUALLINGAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWPBLIBPBVICTUALLINGAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
