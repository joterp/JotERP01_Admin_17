import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewGreetingsCardsAddComponent } from './crew-greetings-cards-add.component';

describe('CrewGreetingsCardsAddComponent', () => {
  let component: CrewGreetingsCardsAddComponent;
  let fixture: ComponentFixture<CrewGreetingsCardsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrewGreetingsCardsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewGreetingsCardsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
