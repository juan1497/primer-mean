import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContentComponent } from './components/login-content/login-content.component';

const routes: Routes = [
  {
    path:'',component:LoginContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
