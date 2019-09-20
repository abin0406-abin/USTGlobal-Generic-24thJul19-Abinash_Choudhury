import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';


const routes: Routes = [
  { path: 'car',component:CarComponent },
  { path: 'car-detail',component:CarDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
