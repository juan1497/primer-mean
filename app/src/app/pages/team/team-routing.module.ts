import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamContentComponent } from './components/team-content/team-content.component';
// import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamUpdateComponent } from './components/team-update/team-update.component';

const routes: Routes = [
  {
    path:'',component:TeamContentComponent,
  },
  {
    path:'update/:id',component:TeamUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
