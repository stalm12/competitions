import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnlassComponent} from "./anlass/anlass.component";

const routes: Routes = [
  {path: '', component: AnlassComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnlassRoutingModule { }
