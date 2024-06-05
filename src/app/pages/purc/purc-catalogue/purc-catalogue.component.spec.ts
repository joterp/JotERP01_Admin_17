import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCCatalogueComponent } from './purc-catalogue.component';

describe('PURCCatalogueComponent', () => {
  let component: PURCCatalogueComponent;
  let fixture: ComponentFixture<PURCCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCCatalogueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
