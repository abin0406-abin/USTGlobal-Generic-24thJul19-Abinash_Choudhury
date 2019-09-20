import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { SportsComponent } from './sports/sports.component';
import { TechnolgyComponent } from './technolgy/technolgy.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { ScienceComponent } from './science/science.component';
import { UsersComponent } from './users/users.component';
import { ReducePipe } from './reduce.pipe';
import { FilterPipe } from './filter.pipe';
import { DeploymentComponent } from './deployment/deployment.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    MoviesComponent,
    HomeComponent,
    FirebaseComponent,
    SportsComponent,
    TechnolgyComponent,
    EntertainmentComponent,
    HealthComponent,
    BusinessComponent,
    ScienceComponent,
    UsersComponent,
    ReducePipe,
    FilterPipe,
    DeploymentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'home',component:HomeComponent},
      { path:'news',component:NewsComponent},
      { path: 'movies',component:MoviesComponent },
      { path: 'firebase',component:FirebaseComponent },
      { path: 'sports',component:SportsComponent },
      { path: 'technolgy',component:TechnolgyComponent },
      { path: 'entertainment',component: EntertainmentComponent},
      { path: 'health',component: HealthComponent},
      { path: 'business',component: BusinessComponent},
      { path: 'science',component: ScienceComponent},
      { path: 'users',component: UsersComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
