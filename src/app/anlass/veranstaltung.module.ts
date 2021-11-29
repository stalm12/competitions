import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VeranstaltungComponent} from './anlass/veranstaltung.component';
import {VeranstaltungDetailComponent} from './anlass/veranstaltung-detail/veranstaltung-detail.component';
import {CompetitorsComponent} from './competitors/competitors.component';
import {RichterComponent} from './richter/richter.component';
import {TeamsComponent} from './teams/teams.component';
import {FinanzenComponent} from './finanzen/finanzen.component';
import {WettkampfComponent} from './wettkampf/wettkampf.component';
import {AbteilungComponent} from './wettkampf/abteilung/abteilung.component';
import {ResultateComponent} from './resultate/resultate.component';
import {TeilnehmerCardComponent} from './anlass/teilnehmer-card/teilnehmer-card.component';
import {RichterCardComponent} from './anlass/richter-card/richter-card.component';
import {TeamCardComponent} from './anlass/team-card/team-card.component';
import {FinanzenCardComponent} from './anlass/finanzen-card/finanzen-card.component';
import {WettkampfCardComponent} from './anlass/wettkampf-card/wettkampf-card.component';
import {ResultatCardComponent} from './anlass/resultat-card/resultat-card.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {AnlassRoutingModule} from "./anlass-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {VeranstaltungDetailEditComponent} from './anlass/veranstaltung-detail/veranstaltung-detail-edit/veranstaltung-detail-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    VeranstaltungComponent,
    VeranstaltungDetailComponent,
    CompetitorsComponent,
    RichterComponent,
    TeamsComponent,
    FinanzenComponent,
    WettkampfComponent,
    AbteilungComponent,
    ResultateComponent,
    TeilnehmerCardComponent,
    RichterCardComponent,
    TeamCardComponent,
    FinanzenCardComponent,
    WettkampfCardComponent,
    ResultatCardComponent,
    VeranstaltungDetailEditComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    AnlassRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule
  ]
})
export class VeranstaltungModule {
}
