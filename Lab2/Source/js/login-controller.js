// Login Controller

"use strict";
trafficApp.controller("loginController", function ($scope, $rootScope) {
    $rootScope.loginLbl = true;
    $rootScope.registerLbl = false;
    $rootScope.userLbl = true;
    $rootScope.logoutLink = true;
    $rootScope.mainPage = false;
    $rootScope.pageClass = "login";

    $scope.formLoginSubmit = function (username, password) {
        //Verify password with the database.For now just loging it out to the console.
        console.log("Username:" + username + " Password:" + password);

        var trafficAppUsers = JSON.parse(localStorage.getItem("trafficAppUsers"));
        if (!trafficAppUsers) {
            trafficAppUsers = [];
        }
        var userDetails = {
            "username": username,
            "timeStamp": Date.now()
        };
        trafficAppUsers.push(userDetails);
        localStorage.setItem("trafficAppUsers", JSON.stringify(trafficAppUsers));
        $rootScope.username = username;
        window.location = "#/home";
    };
});
