import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWNOKDetailsComponent } from './crew-nok-details.component';

describe('CREWNOKDetailsComponent', () => {
  let component: CREWNOKDetailsComponent;
  let fixture: ComponentFixture<CREWNOKDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWNOKDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWNOKDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
