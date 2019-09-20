import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'register',component:RegisterComponent },
  { path:'users',component:UsersComponent },
  { path:'**',component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
