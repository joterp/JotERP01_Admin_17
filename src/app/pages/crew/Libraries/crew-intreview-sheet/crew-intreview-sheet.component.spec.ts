import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWIntreviewSheetComponent } from './crew-intreview-sheet.component';

describe('CREWIntreviewSheetComponent', () => {
  let component: CREWIntreviewSheetComponent;
  let fixture: ComponentFixture<CREWIntreviewSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWIntreviewSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWIntreviewSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
