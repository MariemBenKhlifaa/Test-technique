import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,TableModule,ButtonModule,DialogModule,FormsModule,InputTextModule,ToastModule,CardModule
  ]
})
export class UsersModule { }
