import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

const routes: Routes = [{
  path: '', component: PricingPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
