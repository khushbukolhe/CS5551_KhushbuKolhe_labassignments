import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { RestaurantsPage } from '../pages/restaurants/restaurants';
import { TabsPage } from '../pages/tabs/tabs';
import { RestaurantInfoPage } from '../pages/restaurant-info/restaurant-info';
import { Facebook } from '@ionic-native/facebook';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurantProvider } from '../providers/restaurant/restaurant';
import { KnowledgeSearchServiceProvider } from '../providers/knowledge-search-service/knowledge-search-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    RestaurantsPage,
    TabsPage,
    RestaurantInfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    RestaurantsPage,
    TabsPage,
    RestaurantInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantProvider,
    Geolocation,
    Facebook,
    KnowledgeSearchServiceProvider
  ]
})
export class AppModule {}
