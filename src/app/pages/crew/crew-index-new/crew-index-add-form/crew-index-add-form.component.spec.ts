import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWIndexAddFormComponent } from './crew-index-add-form.component';

describe('CREWIndexAddFormComponent', () => {
  let component: CREWIndexAddFormComponent;
  let fixture: ComponentFixture<CREWIndexAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWIndexAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWIndexAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
