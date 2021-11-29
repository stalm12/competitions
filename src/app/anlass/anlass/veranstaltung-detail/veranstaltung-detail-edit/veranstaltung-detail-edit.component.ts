import {Component, Inject, OnInit} from '@angular/core';
import {Veranstaltung} from "../../veranstaltung.types";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-veranstaltung-detail-edit',
  templateUrl: './veranstaltung-detail-edit.component.html',
  styleUrls: ['./veranstaltung-detail-edit.component.scss']
})
export class VeranstaltungDetailEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VeranstaltungDetailEditComponent>,
    @Inject(MAT_DIALOG_DATA) public veranstaltung: Veranstaltung,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.dialogRef.close()
  }

  discard(): void {
    this.dialogRef.close();
  }

}
