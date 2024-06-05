import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCCatalogueEditComponent } from './purc-catalogue-edit.component';

describe('PURCCatalogueEditComponent', () => {
  let component: PURCCatalogueEditComponent;
  let fixture: ComponentFixture<PURCCatalogueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCCatalogueEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCCatalogueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
