import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [UsersListComponent],
  declarations: [UsersListComponent]
})
export class AddUserEventsModule { }
