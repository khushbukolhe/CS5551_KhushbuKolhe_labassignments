import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {
  restaurants: any;
  //API URL for FourSquare
  apiURL: any;
  public key: any;

  constructor(public http: Http) {
    this.restaurants = null;
    this.apiURL='https://developers.zomato.com/api/v2.1/search?entity_id=856&entity_type=city&lat=39.04&lon=-94.59&radius=5000&count=10';
    }

  loadRestaurantsNearLocation() {
    console.log("API URL : " + this.apiURL);
    if (this.restaurants) {
      return Promise.resolve(this.restaurants);
    }

    let opt: RequestOptions;
    let myheaders = new Headers();
    this.key='16a979934d2da2dbd8dd6cc21483e354';
    myheaders.append('Accept', 'application/json');
    myheaders.append('user-key', this.key);
    opt = new RequestOptions({
      headers: myheaders
    });
    return new Promise(resolve => {
        this.http.get(this.apiURL,opt)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log("SERVICE RESPONSE :" + JSON.stringify(data));
          this.restaurants = data.restaurants;
          resolve(this.restaurants);
        });
    })
  }
}
