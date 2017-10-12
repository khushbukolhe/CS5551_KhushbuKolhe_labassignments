import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { RestaurantInfoPage } from '../restaurant-info/restaurant-info';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  lng: any;
  lat: any;
  restaurantInfo:any;
  restaurantId:any;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams,
               public geolocation: Geolocation, public restoService: RestaurantProvider) {
    this.lat = null;
    this.lng = null;

  }

  loadPeople(){
    this.restoService.loadRestaurantsNearLocation()
    .then(data => {
        this.restaurantInfo = data;
        this.restaurantId=data.id
    });
    }

  getUserLocation() {
    this.platform.ready().then(() => {
            this.geolocation.getCurrentPosition().then(pos => {
              this.lat=pos.coords.latitude;
              this.lng=pos.coords.longitude
            });
          });
  }

  ionViewDidLoad() {
    this.getUserLocation();
    this.loadPeople();
  }

  viewRestaurantInfo(restaurantid){
    console.log(restaurantid);
    this.navCtrl.push(RestaurantInfoPage,{
      details: restaurantid,
    });
  }

}








