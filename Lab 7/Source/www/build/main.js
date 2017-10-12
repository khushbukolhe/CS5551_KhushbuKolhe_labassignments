webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restaurant_restaurant__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restaurant_info_restaurant_info__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantsPage = (function () {
    function RestaurantsPage(platform, navCtrl, navParams, geolocation, restoService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.restoService = restoService;
        this.lat = null;
        this.lng = null;
    }
    RestaurantsPage.prototype.loadPeople = function () {
        var _this = this;
        this.restoService.loadRestaurantsNearLocation()
            .then(function (data) {
            _this.restaurantInfo = data;
            _this.restaurantId = data.id;
        });
    };
    RestaurantsPage.prototype.getUserLocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.geolocation.getCurrentPosition().then(function (pos) {
                _this.lat = pos.coords.latitude;
                _this.lng = pos.coords.longitude;
            });
        });
    };
    RestaurantsPage.prototype.ionViewDidLoad = function () {
        this.getUserLocation();
        this.loadPeople();
    };
    RestaurantsPage.prototype.viewRestaurantInfo = function (restaurantid) {
        console.log(restaurantid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__restaurant_info_restaurant_info__["a" /* RestaurantInfoPage */], {
            details: restaurantid,
        });
    };
    return RestaurantsPage;
}());
RestaurantsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurants',template:/*ion-inline-start:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/restaurants/restaurants.html"*/'<!--\n  Generated template for the RestaurantsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Restaurants Near Me</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <p>Lattitude: {{lat}}</p>\n    <p>Longitude: {{lng}}</p>\n  </div>\n    <ion-list>\n      <button ion-item *ngFor="let resto of restaurantInfo" (click)="viewRestaurantInfo(resto.restaurant.id)" >\n        <h2>{{resto.restaurant.name}}</h2>\n        <p>{{resto.restaurant.cuisines}}</p>\n        <p>Address: {{resto.restaurant.location.address}}</p>\n        <p>Avg Cost: {{resto.restaurant.average_cost_for_two}}  {{resto.restaurant.currency}}</p>\n        <p>User Rating: {{resto.restaurant.user_rating.aggregate_rating}}</p>\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/restaurants/restaurants.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__providers_restaurant_restaurant__["a" /* RestaurantProvider */]])
], RestaurantsPage);

//# sourceMappingURL=restaurants.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_restaurant__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RestaurantInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestaurantInfoPage = (function () {
    function RestaurantInfoPage(navCtrl, navParams, restoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restoService = restoService;
        this.navParams.get('details');
        this.details = navParams.get('details');
        console.log('Id: ' + JSON.stringify(this.details));
        this.restaurantInfo = {
            location: {},
            user_rating: {}
        };
    }
    RestaurantInfoPage.prototype.loadRestoInfo = function () {
        var _this = this;
        this.restoService.loadRestaurantDetails(this.details)
            .then(function (data) {
            console.log("GOT DATA: " + JSON.stringify(data));
            _this.restaurantInfo = data;
        });
    };
    RestaurantInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantInfoPage');
        this.loadRestoInfo();
    };
    return RestaurantInfoPage;
}());
RestaurantInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restaurant-info',template:/*ion-inline-start:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/restaurant-info/restaurant-info.html"*/'<!--\n  Generated template for the RestaurantInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>restaurantInfo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>{{restaurantInfo.name}}</ion-card-header>\n    <ion-card-content>\n      <div class="card-background">\n          <div><b>Cusine: </b>{{restaurantInfo.cuisines}}</div>\n          <div><b>Address: </b>{{restaurantInfo.location.address}}</div>\n          <div><b>Avg Cost: </b>{{restaurantInfo.average_cost_for_two}} {{restaurantInfo.currency}}</div>      \n          <div><b>User Rating: </b>{{restaurantInfo.user_rating.aggregate_rating}} {{restaurantInfo.user_rating.rating_text}}</div>\n          <div><b>Online Delivery: </b>{{restaurantInfo.has_online_delivery}}</div>    \n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <div>Maps are coming soon...</div>\n  </ion-card>\n  <ion-card>\n      <div>User reviews coming soon...</div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/restaurant-info/restaurant-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restaurant_restaurant__["a" /* RestaurantProvider */]])
], RestaurantInfoPage);

//# sourceMappingURL=restaurant-info.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_knowledge_search_service_knowledge_search_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, knowledgeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.knowledgeService = knowledgeService;
        this.searchResults = null;
    }
    SearchPage.prototype.loadSearchResults = function () {
        var _this = this;
        this.knowledgeService.loadSearchInfo(this.searchInput)
            .then(function (data) {
            _this.searchResults = data;
            console.log('LOAD Searches : RESPONSE' + JSON.stringify(_this.searchResults));
        });
    };
    SearchPage.prototype.ionViewDidLoad = function () { };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Google Knowledge Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-input type="search" [(ngModel)]="searchInput" clearInput="true" placeholder="Enter search text..."></ion-input>\n    <button ion-button item-right (click)="loadSearchResults()">Search</button>\n  </ion-item>\n  <ion-list>\n    <ion-item *ngFor="let search of searchResults">\n      <ion-avatar item-left>\n        <img src="{{search.result.image.contentUrl}}">\n      </ion-avatar>\n      <h2>{{search.result.name}}</h2>\n      <p>{{search.result.description}}</p>\n      <div text-wrap>{{search.result.detailedDescription.articleBody}}</div>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_knowledge_search_service_knowledge_search_service__["a" /* KnowledgeSearchServiceProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/restaurant-info/restaurant-info.module": [
		274,
		2
	],
	"../pages/restaurants/restaurants.module": [
		272,
		1
	],
	"../pages/search/search.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnowledgeSearchServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the KnowledgeSearchServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var KnowledgeSearchServiceProvider = (function () {
    function KnowledgeSearchServiceProvider(http) {
        this.http = http;
        console.log('Hello KnowledgeSearchServiceProvider Provider');
        this.data = null;
        this.apiKey = 'AIzaSyDn_6EqCQ9K4mGwuee8bOBEUEubBWtXxh8';
        this.apiURL = 'https://kgsearch.googleapis.com/v1/entities:search?query=barrak+obama&key=AIzaSyDn_6EqCQ9K4mGwuee8bOBEUEubBWtXxh8&limit=1';
        this.filteredData = [];
    }
    KnowledgeSearchServiceProvider.prototype.loadSearchInfo = function (query) {
        var _this = this;
        this.apiURL = 'https://kgsearch.googleapis.com/v1/entities:search?query=' + query.replace(' ', '+') + '&key=' + this.apiKey + '&limit=20';
        return new Promise(function (resolve) {
            _this.http.get(_this.apiURL)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.filteredData = [];
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
                }, _this);
                resolve(_this.filteredData);
            });
        });
    };
    return KnowledgeSearchServiceProvider;
}());
KnowledgeSearchServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], KnowledgeSearchServiceProvider);

//# sourceMappingURL=knowledge-search-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurants_restaurants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__restaurants_restaurants__["a" /* RestaurantsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Restaurants" tabIcon="restaurant"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Search" tabIcon="search"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCntr, fb) {
        var _this = this;
        this.navCntr = navCntr;
        this.fb = fb;
        this.isLoggedIn = false;
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
    }
    HomePage.prototype.login = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    HomePage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.users = res;
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    HomePage.prototype.openRestaurantsTab = function () {
    };
    HomePage.prototype.openSearchTab = function () {
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Restaurants and Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="false" class="contentBackground">\n  <div class="heading">\n    <h1>Welcome to Restaurant and Knowledge Search</h1>\n  </div>\n  <div class="description">\n    <p>This is an IONIC Mash up application for Knowledge Search and Restaurants Search</p>\n  </div>\n  <div class="buttons">\n    <!-- <button ion-button full (click)=\'openRestaurantsTab();\'>Search Restaurants</button>\n    <button ion-button full (click)=\'openSearchTab();\'>Search using Knowledge API</button> -->\n\n    <div *ngIf="isLoggedIn; else facebookLogin">\n      <h2>Hi, {{users.name}} ({{users.email}})</h2>\n      <p>\n        Gender: {{users.gender}}\n      </p>\n      <p>\n        <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n      </p>\n      <p>\n        <button ion-button icon-right (click)="logout()">\n          Logout\n        </button>\n      </p>\n    </div>\n    <ng-template #facebookLogin>\n      <button ion-button icon-right (click)="login()">\n        Login with\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n    </ng-template>\n\n  </div>\n  <div class="img-restaurants">\n    <img src="../../assets/image.jpg">\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_restaurants_restaurants__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_info_restaurant_info__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_restaurant_restaurant__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_knowledge_search_service_knowledge_search_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_info_restaurant_info__["a" /* RestaurantInfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/restaurant-info/restaurant-info.module#RestaurantInfoPageModule', name: 'RestaurantInfoPage', segment: 'restaurant-info', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_restaurants_restaurants__["a" /* RestaurantsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_restaurant_info_restaurant_info__["a" /* RestaurantInfoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_restaurant_restaurant__["a" /* RestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_15__providers_knowledge_search_service_knowledge_search_service__["a" /* KnowledgeSearchServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/shriniketsarkar/Ase_Documents/Tutorial_6_Ionic/Updated/MyAppFBLogin/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestaurantProvider = (function () {
    function RestaurantProvider(http) {
        this.http = http;
        this.restaurants = null;
        this.apiURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=856&entity_type=city&lat=39.04&lon=-94.59&radius=5000&count=10';
    }
    RestaurantProvider.prototype.loadRestaurantsNearLocation = function () {
        var _this = this;
        console.log("API URL : " + this.apiURL);
        if (this.restaurants) {
            return Promise.resolve(this.restaurants);
        }
        var opt;
        var myheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.key = '16a979934d2da2dbd8dd6cc21483e354';
        myheaders.append('Accept', 'application/json');
        myheaders.append('user-key', this.key);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myheaders
        });
        return new Promise(function (resolve) {
            _this.http.get(_this.apiURL, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                console.log("SERVICE RESPONSE :" + JSON.stringify(data));
                _this.restaurants = data.restaurants;
                resolve(_this.restaurants);
            });
        });
    };
    RestaurantProvider.prototype.loadRestaurantDetails = function (restoId) {
        var _this = this;
        this.apiRestoInfoURL = 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + restoId;
        var opt;
        var myheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.key = '16a979934d2da2dbd8dd6cc21483e354';
        this.infoKey = restoId;
        myheaders.append('Accept', 'application/json');
        myheaders.append('user-key', this.key);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myheaders
        });
        console.log("API URL2 : " + this.apiRestoInfoURL);
        return new Promise(function (resolve) {
            console.log("API URL3 : " + _this.apiRestoInfoURL);
            _this.http.get(_this.apiRestoInfoURL, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                console.log("SERVICE RESPONSE :" + JSON.stringify(data));
                _this.restaurants = data;
                resolve(_this.restaurants);
            });
        });
    };
    RestaurantProvider.prototype.loadRestaurantReview = function (restoId) {
        var _this = this;
        this.apiRestoReviewURL = 'https://developers.zomato.com/api/v2.1/reviews?res_id=' + restoId;
        var opt;
        var myheaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.key = '16a979934d2da2dbd8dd6cc21483e354';
        this.infoKey = restoId;
        myheaders.append('Accept', 'application/json');
        myheaders.append('user-key', this.key);
        opt = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: myheaders
        });
        console.log("API URL2 : " + this.apiRestoReviewURL);
        return new Promise(function (resolve) {
            console.log("API URL3 : " + _this.apiRestoReviewURL);
            _this.http.get(_this.apiRestoReviewURL, opt)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                console.log("SERVICE RESPONSE :" + JSON.stringify(data));
                _this.restaurants = data;
                resolve(_this.restaurants);
            });
        });
    };
    return RestaurantProvider;
}());
RestaurantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RestaurantProvider);

//# sourceMappingURL=restaurant.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map