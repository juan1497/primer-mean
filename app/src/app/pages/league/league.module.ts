import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueContentComponent } from './components/league-content/league-content.component';
import { NbaService } from 'src/app/shared/services/nba.service';


@NgModule({
  declarations: [
    LeagueContentComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ],providers:[NbaService]

})
export class LeagueModule { }
