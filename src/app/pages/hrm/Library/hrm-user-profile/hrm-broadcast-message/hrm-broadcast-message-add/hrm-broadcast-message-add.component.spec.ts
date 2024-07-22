import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmBroadcastMessageAddComponent } from './hrm-broadcast-message-add.component';

describe('HrmBroadcastMessageAddComponent', () => {
  let component: HrmBroadcastMessageAddComponent;
  let fixture: ComponentFixture<HrmBroadcastMessageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrmBroadcastMessageAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrmBroadcastMessageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
