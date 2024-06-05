import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWAdditionalTraitsComponent } from './crew-additional-traits.component';

describe('CREWAdditionalTraitsComponent', () => {
  let component: CREWAdditionalTraitsComponent;
  let fixture: ComponentFixture<CREWAdditionalTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWAdditionalTraitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWAdditionalTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
