import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLinkOpenComponent } from './create-link-open.component';

describe('CreateLinkOpenComponent', () => {
  let component: CreateLinkOpenComponent;
  let fixture: ComponentFixture<CreateLinkOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLinkOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLinkOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
