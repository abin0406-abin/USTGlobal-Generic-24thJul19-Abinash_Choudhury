import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { BikeComponent } from './bike/bike.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailsComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    MobileComponent,
    MobileDetailsComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    BikeComponent,
    BikeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'',component:HomeComponent},
      { path: 'car', component: CarComponent },
      { path: 'recipe', component: RecipeComponent},
      { path: 'news', component: NewsComponent},
      { path: 'mobile', component: MobileComponent},
      { path: '**', component:ErrorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
