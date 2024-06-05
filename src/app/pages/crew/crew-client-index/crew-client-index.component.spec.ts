import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWClientIndexComponent } from './crew-client-index.component';

describe('CREWClientIndexComponent', () => {
  let component: CREWClientIndexComponent;
  let fixture: ComponentFixture<CREWClientIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWClientIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWClientIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
