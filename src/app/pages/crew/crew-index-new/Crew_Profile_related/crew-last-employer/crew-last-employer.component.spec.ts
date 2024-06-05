import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CREWLastEmployerComponent } from './crew-last-employer.component';

describe('CREWLastEmployerComponent', () => {
  let component: CREWLastEmployerComponent;
  let fixture: ComponentFixture<CREWLastEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CREWLastEmployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CREWLastEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
