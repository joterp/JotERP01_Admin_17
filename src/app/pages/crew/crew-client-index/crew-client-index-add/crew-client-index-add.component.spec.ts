import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWClientIndexAddComponent } from './crew-client-index-add.component';

describe('CREWClientIndexAddComponent', () => {
  let component: CREWClientIndexAddComponent;
  let fixture: ComponentFixture<CREWClientIndexAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWClientIndexAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWClientIndexAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
