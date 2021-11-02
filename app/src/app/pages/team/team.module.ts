import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamContentComponent } from './components/team-content/team-content.component';
import { NbaService } from 'src/app/shared/services/nba.service';
import {  ReactiveFormsModule } from '@angular/forms';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamUpdateComponent } from './components/team-update/team-update.component';



@NgModule({
  declarations: [
    TeamContentComponent,
    TeamCreateComponent,
    TeamUpdateComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    ReactiveFormsModule

  ],providers:[NbaService]
})
export class TeamModule { }
