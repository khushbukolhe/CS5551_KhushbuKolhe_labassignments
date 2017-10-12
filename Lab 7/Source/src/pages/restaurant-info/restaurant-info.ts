import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

/**
 * Generated class for the RestaurantInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-info',
  templateUrl: 'restaurant-info.html',
})
export class RestaurantInfoPage {
  details:any;
  restaurantInfo:any;
  restaurantId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restoService: RestaurantProvider) {
    this.navParams.get('details');
    this.details = navParams.get('details')
    console.log('Id: '+ JSON.stringify(this.details));
    this.restaurantInfo = {
      location: {},
      user_rating: {}
    };
  }

  loadRestoInfo(){
    this.restoService.loadRestaurantDetails(this.details)
    .then(data => {
      console.log("GOT DATA: " + JSON.stringify(data));
        this.restaurantInfo = data;
    });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantInfoPage');
    this.loadRestoInfo();
  }

}
