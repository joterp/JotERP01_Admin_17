import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSItemsFromLibraryAddComponent } from './ops-items-from-library-add.component';

describe('OPSItemsFromLibraryAddComponent', () => {
  let component: OPSItemsFromLibraryAddComponent;
  let fixture: ComponentFixture<OPSItemsFromLibraryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OPSItemsFromLibraryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OPSItemsFromLibraryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
