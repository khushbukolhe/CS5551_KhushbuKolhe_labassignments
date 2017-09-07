// Registration Controller

trafficApp.controller("registrationController", function ($scope, $rootScope) {
    $rootScope.loginLbl = false;
    $rootScope.registerLbl = true;
    $rootScope.userLbl = true;
    $rootScope.logoutLink = true;
    $rootScope.username = "";
    $rootScope.mainPage = false;

    $scope.formRegisterSubmit = function (username, password) {
        //Save password to the database.For now just loging it out to the console.
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
