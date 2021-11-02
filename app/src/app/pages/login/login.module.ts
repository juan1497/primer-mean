import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContentComponent } from './components/login-content/login-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';


@NgModule({
  declarations: [
    LoginContentComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule

  ],providers:[UserService]
})
export class LoginModule { }
