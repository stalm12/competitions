import {Component, OnInit} from '@angular/core';
import {veranstaltungExample} from "./veranstaltung.types";

@Component({
  selector: 'app-event',
  templateUrl: './veranstaltung.component.html',
  styleUrls: ['./veranstaltung.component.scss']
})
export class VeranstaltungComponent implements OnInit {

  public veranstaltung = veranstaltungExample;

  constructor() {
  }

  ngOnInit(): void {
  }

}
