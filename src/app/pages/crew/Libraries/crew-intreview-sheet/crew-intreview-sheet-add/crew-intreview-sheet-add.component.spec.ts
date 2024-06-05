import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWIntreviewSheetAddComponent } from './crew-intreview-sheet-add.component';

describe('CREWIntreviewSheetAddComponent', () => {
  let component: CREWIntreviewSheetAddComponent;
  let fixture: ComponentFixture<CREWIntreviewSheetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWIntreviewSheetAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWIntreviewSheetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
