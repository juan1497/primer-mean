import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./pages/home/home.module').then((m)=>m.HomeModule),
    canActivate:[AuthGuard]
  },
  {
    path:'league',
    loadChildren:()=>import('./pages/league/league.module').then((m)=>m.LeagueModule),
    canActivate:[AuthGuard]
  },
  {
    path:'login',loadChildren:()=>import('./pages/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'team',loadChildren:()=>import('./pages/team/team.module').then((m)=>m.TeamModule)
    ,canActivate:[AuthGuard]
  },
  {
    path:'**',redirectTo:'',pathMatch:'full'
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


