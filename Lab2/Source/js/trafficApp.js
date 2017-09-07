// Traffic App Main Controller

"use strict";
var trafficApp = angular.module("trafficApp", ["ngRoute", "ngMap", "ngAnimate"]).run(function ($rootScope) {
    $rootScope.loginLbl = false;
    $rootScope.registerLbl = false;
    $rootScope.userLbl = true;
    $rootScope.username = "";
    $rootScope.logoutLink = true;


});

trafficApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/index.html",
            controller: "mainController"
        })
        .when("/login", {
            templateUrl: "pages/login.html",
            controller: "loginController"
        })
        .when("/register", {
            templateUrl: "pages/register.html",
            controller: "registrationController"
        })
        .when("/home", {
            templateUrl: "pages/home.html",
            controller: "homeController"
        });
});



// create the controller and inject Angular's $scope
trafficApp.controller("mainController", function ($scope, $rootScope) {
    $rootScope.loginLbl = false;
    $rootScope.registerLbl = false;
    $rootScope.userLbl = true;
    $rootScope.username = "";
});


