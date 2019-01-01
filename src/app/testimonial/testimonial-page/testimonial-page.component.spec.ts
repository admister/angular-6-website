import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialPageComponent } from './testimonial-page.component';

describe('TestimonialPageComponent', () => {
  let component: TestimonialPageComponent;
  let fixture: ComponentFixture<TestimonialPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
