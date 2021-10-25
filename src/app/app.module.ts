import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { DashboardVereinComponent } from './dashboard/dashboard-association/dashboard-verein.component';
import { DashboardWettkaempfeComponent } from './dashboard/dashboard-competitions/dashboard-wettkaempfe.component';
import { DashboardAdministrationComponent } from './dashboard/dashboard-administration/dashboard-administration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardVereinComponent,
    DashboardWettkaempfeComponent,
    DashboardAdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
