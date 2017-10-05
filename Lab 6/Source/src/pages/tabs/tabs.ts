import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RestaurantsPage } from '../restaurants/restaurants'
import { SearchPage } from '../search/search'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = RestaurantsPage;
  tab5Root = SearchPage;

  constructor() {

  }
}
