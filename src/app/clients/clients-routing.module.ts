import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsPageComponent } from './clients-page/clients-page.component';

const routes: Routes = [{
  path: '', component: ClientsPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
