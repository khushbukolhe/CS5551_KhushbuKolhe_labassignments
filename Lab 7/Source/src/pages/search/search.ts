import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KnowledgeSearchServiceProvider } from '../../providers/knowledge-search-service/knowledge-search-service';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public searchResults: any;
  public searchInput: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              public knowledgeService: KnowledgeSearchServiceProvider) {
      this.searchResults = null;
  }

  loadSearchResults(){

    this.knowledgeService.loadSearchInfo(this.searchInput)
    .then(data => {
        this.searchResults = data;
        console.log('LOAD Searches : RESPONSE'+ JSON.stringify(this.searchResults));
    });
    }

  ionViewDidLoad() {}

}
