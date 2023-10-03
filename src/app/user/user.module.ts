import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [],
})
export class UserModule {}
