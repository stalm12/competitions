import {Component, Input, OnInit} from '@angular/core';
import {Veranstaltung} from "../veranstaltung.types";
import {MatDialog} from "@angular/material/dialog";
import {VeranstaltungDetailEditComponent} from "./veranstaltung-detail-edit/veranstaltung-detail-edit.component";

@Component({
  selector: 'app-event-detail',
  templateUrl: './veranstaltung-detail.component.html',
  styleUrls: ['./veranstaltung-detail.component.scss']
})
export class VeranstaltungDetailComponent implements OnInit {

  @Input() veranstaltung?: Veranstaltung;



  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  edit() {
    let dialogRef = this.dialog.open(VeranstaltungDetailEditComponent, {
      minWidth: '300px',
      data: this.veranstaltung
    });
  }
}
