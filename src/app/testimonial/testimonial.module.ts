import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialRoutingModule } from './testimonial-routing.module';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { FeedbackBlockComponent } from './feedback-block/feedback-block.component';

@NgModule({
  imports: [
    CommonModule,
    TestimonialRoutingModule
  ],
  declarations: [TestimonialPageComponent, FeedbackBlockComponent]
})
export class TestimonialModule { }
