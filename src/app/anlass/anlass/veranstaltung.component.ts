import {Component, OnInit} from '@angular/core';
import {veranstaltungExample} from "./veranstaltung.types";
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-event',
  templateUrl: './veranstaltung.component.html',
  styleUrls: ['./veranstaltung.component.scss']
})
export class VeranstaltungComponent implements OnInit {

  public veranstaltung = veranstaltungExample;

  public veranstaltungsId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
this.activatedRoute.params.pipe(tap(params => {
  this.veranstaltungsId = params.id;
}));
  }

}
