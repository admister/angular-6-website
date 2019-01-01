import { TestimonialModule } from './testimonial.module';

describe('TestimonialModule', () => {
  let testimonialModule: TestimonialModule;

  beforeEach(() => {
    testimonialModule = new TestimonialModule();
  });

  it('should create an instance', () => {
    expect(testimonialModule).toBeTruthy();
  });
});
