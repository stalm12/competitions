import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VeranstaltungComponent} from "./anlass/veranstaltung.component";

const routes: Routes = [
  {path: '', component: VeranstaltungComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnlassRoutingModule { }
