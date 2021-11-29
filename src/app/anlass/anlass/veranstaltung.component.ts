import {Component, OnDestroy, OnInit} from '@angular/core';
import {veranstaltungExample} from "./veranstaltung.types";
import {ActivatedRoute} from "@angular/router";
import {takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-event',
  templateUrl: './veranstaltung.component.html',
  styleUrls: ['./veranstaltung.component.scss']
})
export class VeranstaltungComponent implements OnInit, OnDestroy{

  public veranstaltung = veranstaltungExample;

  private destroy$ = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        // TODO: hier mit der ID die Veranstaltung laden
        console.log(params.id);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
