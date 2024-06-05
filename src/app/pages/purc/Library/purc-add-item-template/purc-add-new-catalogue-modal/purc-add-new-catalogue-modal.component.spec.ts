import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCAddNewCatalogueModalComponent } from './purc-add-new-catalogue-modal.component';

describe('PURCAddNewCatalogueModalComponent', () => {
  let component: PURCAddNewCatalogueModalComponent;
  let fixture: ComponentFixture<PURCAddNewCatalogueModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCAddNewCatalogueModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCAddNewCatalogueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
