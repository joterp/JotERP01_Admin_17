import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewGreetingCardsComponent } from './crew-greeting-cards.component';

describe('CrewGreetingCardsComponent', () => {
  let component: CrewGreetingCardsComponent;
  let fixture: ComponentFixture<CrewGreetingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewGreetingCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewGreetingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
