import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueContentComponent } from './components/league-content/league-content.component';

const routes: Routes = [
  {
    path:'',component:LeagueContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
