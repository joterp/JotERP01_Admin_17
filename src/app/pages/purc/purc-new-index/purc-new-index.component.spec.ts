import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCNewIndexComponent } from './purc-new-index.component';

describe('PURCNewIndexComponent', () => {
  let component: PURCNewIndexComponent;
  let fixture: ComponentFixture<PURCNewIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCNewIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCNewIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
