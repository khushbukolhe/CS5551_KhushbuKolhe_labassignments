import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the KnowledgeSearchServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KnowledgeSearchServiceProvider {
  apiURL: any;
  data: any;
  apiKey: any;
  filteredData: any;
  constructor(public http: Http) {
    console.log('Hello KnowledgeSearchServiceProvider Provider');
    this.data = null;
    this.apiKey = 'AIzaSyDn_6EqCQ9K4mGwuee8bOBEUEubBWtXxh8';
    this.apiURL='https://kgsearch.googleapis.com/v1/entities:search?query=barrak+obama&key=AIzaSyDn_6EqCQ9K4mGwuee8bOBEUEubBWtXxh8&limit=1';
    this.filteredData = [];
  }
loadSearchInfo(query){
  this.apiURL = 'https://kgsearch.googleapis.com/v1/entities:search?query=' + query.replace(' ', '+') + '&key=' + this.apiKey + '&limit=20';
  return new Promise(resolve => {

    this.http.get(this.apiURL)
      .map(res => res.json())
      .subscribe(data => {
        this.filteredData = [];
        data.itemListElement.forEach(function (dataElement) {
          if (dataElement.result &&
            dataElement.result.hasOwnProperty('name') &&
            dataElement.result.hasOwnProperty('description') &&
            dataElement.result.hasOwnProperty('image') &&
            dataElement.result.image.hasOwnProperty('contentUrl') &&
            dataElement.result.hasOwnProperty('detailedDescription') &&
            dataElement.result.detailedDescription.hasOwnProperty('articleBody')) {
            this.filteredData.push(dataElement);
          }
        }, this);

        resolve(this.filteredData);
      });
  });
}
}
