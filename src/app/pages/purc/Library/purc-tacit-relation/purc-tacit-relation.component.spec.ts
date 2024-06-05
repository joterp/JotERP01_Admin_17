import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PURCTacitRelationComponent } from './purc-tacit-relation.component';

describe('PURCTacitRelationComponent', () => {
  let component: PURCTacitRelationComponent;
  let fixture: ComponentFixture<PURCTacitRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PURCTacitRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PURCTacitRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
