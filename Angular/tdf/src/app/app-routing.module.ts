import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResisterComponent } from './resister/resister.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'resister',component:ResisterComponent },
  { path:'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
