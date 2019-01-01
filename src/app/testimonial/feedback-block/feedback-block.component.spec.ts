import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackBlockComponent } from './feedback-block.component';

describe('FeedbackBlockComponent', () => {
  let component: FeedbackBlockComponent;
  let fixture: ComponentFixture<FeedbackBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
