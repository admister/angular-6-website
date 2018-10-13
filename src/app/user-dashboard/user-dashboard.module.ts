import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ],
  declarations: [UserDashboardComponent, UserProfileIconComponent],
  exports: [UserDashboardComponent, UserProfileIconComponent]
})
export class UserDashboardModule { }
