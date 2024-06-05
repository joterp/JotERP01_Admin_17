import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCTacitRelationEditComponent } from './purc-tacit-relation-edit.component';

describe('PURCTacitRelationEditComponent', () => {
  let component: PURCTacitRelationEditComponent;
  let fixture: ComponentFixture<PURCTacitRelationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCTacitRelationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCTacitRelationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
