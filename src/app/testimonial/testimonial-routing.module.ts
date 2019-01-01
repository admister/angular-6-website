import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';

const routes: Routes = [{
  path: '', component: TestimonialPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialRoutingModule { }
