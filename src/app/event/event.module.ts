import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventComponent} from './event/event.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {CompetitorsComponent} from './competitors/competitors.component';
import {JudgesComponent} from './judges/judges.component';
import {TeamsComponent} from './teams/teams.component';
import {FinancesComponent} from './finances/finances.component';
import {CompetitionComponent} from './competition/competition.component';
import {DivisionComponent} from './competition/division/division.component';
import {ResultsComponent} from './results/results.component';
import {CompetitorsCardComponent} from './event/competitors-card/competitors-card.component';
import {JudgesCardComponent} from './event/judges-card/judges-card.component';
import {TeamsCardComponent} from './event/teams-card/teams-card.component';
import {FinancesCardComponent} from './event/finances-card/finances-card.component';
import {CompetitionCardComponent} from './event/competition-card/competition-card.component';
import {ResultsCardComponent} from './event/results-card/results-card.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {EventRoutingModule} from "./event-routing.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    EventComponent,
    EventDetailComponent,
    CompetitorsComponent,
    JudgesComponent,
    TeamsComponent,
    FinancesComponent,
    CompetitionComponent,
    DivisionComponent,
    ResultsComponent,
    CompetitorsCardComponent,
    JudgesCardComponent,
    TeamsCardComponent,
    FinancesCardComponent,
    CompetitionCardComponent,
    ResultsCardComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    EventRoutingModule,
    MatCardModule
  ]
})
export class EventModule {
}
