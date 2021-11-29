import { Component, OnInit } from '@angular/core';
import {
  veranstaltungOverviewExample1, veranstaltungOverviewExample2, veranstaltungOverviewExample3,
} from "./VeranstaltungOverview";

@Component({
  selector: 'app-dashboard-competitions',
  templateUrl: './dashboard-veranstaltungen.component.html',
  styleUrls: ['./dashboard-veranstaltungen.component.scss']
})
export class DashboardVeranstaltungenComponent implements OnInit {

  public wettkaempfe = [veranstaltungOverviewExample1, veranstaltungOverviewExample2, veranstaltungOverviewExample3]

  constructor() { }

  ngOnInit(): void {
  }

}
