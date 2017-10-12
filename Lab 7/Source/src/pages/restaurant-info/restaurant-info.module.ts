import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantInfoPage } from './restaurant-info';

@NgModule({
  declarations: [
    RestaurantInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantInfoPage),
  ],
})
export class RestaurantInfoPageModule {}
