/**
 * Created by Khushbu Kolhe on 10/25/2017.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    // $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){


    $scope.getItems = function () {

        var searchQuery = document.getElementById("txt_searchFilter").value;
        var apiKey ='AIzaSyDn_6EqCQ9K4mGwuee8bOBEUEubBWtXxh8';

        var handler = $http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + searchQuery.replace(' ', '+') + '&key=' + apiKey + '&limit=1');

        handler.success(function (data) {
            $scope.searchResults = [];
            data.itemListElement.forEach(function (dataElement) {
                if (
                    dataElement.result &&
                    dataElement.result.hasOwnProperty('name') &&
                    dataElement.result.hasOwnProperty('description') &&
                    dataElement.result.hasOwnProperty('image') &&
                    dataElement.result.image.hasOwnProperty('contentUrl') &&
                    dataElement.result.hasOwnProperty('detailedDescription') &&
                    dataElement.result.detailedDescription.hasOwnProperty('articleBody')
                )
                {
                    $scope.searchResults.push({
                        "name": dataElement.result.name,
                        "desc": dataElement.result.description,
                        "image": dataElement.result.image,
                        "contentURL": dataElement.result.image.contentUrl,
                        "detailedDescription": dataElement.result.detailedDescription,
                        "articleBody": dataElement.result.detailedDescription.articleBody
                    });
                }
            });
        });

        handler.error(function (data) {
            alert("There was some error processing your request. Please try after some time.");
        });
    }






    $scope.insertData = function(){

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                // $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            }
        }
        var req = $http.post('http://127.0.0.1:8081/register',$scope.searchResults[0]);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            var frm = document.getElementsByName('frm_insert')[0];
            frm.reset();
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };


    $scope.gettingData = function(){

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/getData');
        req.success(function(data, status, headers, config) {
            $scope.searchData = data;
            console.log(JSON.stringify(data));
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.deleteData = function(){
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/deleteData',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log("data1 is :"+ data);
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };

    $scope.updateInfo = function(){
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/updateData',$scope.formDataUpdate);
        req.success(function(data, status, headers, config) {
            var frm = document.getElementsByName('update_frm')[0];
            frm.reset();
        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };




});