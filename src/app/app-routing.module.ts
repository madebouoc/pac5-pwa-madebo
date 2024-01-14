import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CakeListComponent} from "./components/cake-list/cake-list.component";
import {CakeDetailComponent} from "./components/cake-detail/cake-detail.component";

const routes: Routes = [
  {path: '', component: CakeListComponent},
  {path: 'cake/:id', component: CakeDetailComponent},
  {path: '**', component: CakeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
