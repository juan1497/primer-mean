import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserService } from '../shared/services/user.service';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers:[UserService],
  exports:[NavigationComponent]
})
export class CoreModule { }
