'use strict';

angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.getItems = function () {

            var searchQuery = document.getElementById("txt_searchFilter").value;
            var apiKey ='AIzaSyDn_6EqCQ9K4mGwuee8bOBEUEubBWtXxh8';

            var handler = $http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + searchQuery.replace(' ', '+') + '&key=' + apiKey + '&limit=5');

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
                        $scope.searchResults.push(dataElement);
                    }

                });


            });

            handler.error(function (data) {
                alert("There was some error processing your request. Please try after some time.");
            });
        }

        $scope.getNutrition = function (itemSelected) {
            if (itemSelected != null) {

                var handler = $http.get('https://api.nutritionix.com/v1_1/search/'+ itemSelected+'?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=481404ea&appKey=c624ca0b5e85f2f234653dfd8d5fa9c3');
                handler.success(function (result) {
                    console.log(itemSelected);
                    console.log(result);
                    // $scope.foodItems
                    var foodItemName = result.hits[0].fields.item_name;

                    console.log(foodItemName);


                    $scope.nutritionresults = [];
                    if (
                        result.hits[0].hasOwnProperty('fields') &&
                        result.hits[0].fields.hasOwnProperty('item_name') &&
                        result.hits[0].fields.hasOwnProperty('brand_name') &&
                        result.hits[0].fields.hasOwnProperty('nf_calories') &&
                        result.hits[0].fields.hasOwnProperty('nf_total_fat') &&
                        result.hits[0].fields.hasOwnProperty('nf_serving_size_qty')
                    )
                    {
                        $scope.nutritionresults.push(result.hits[0].fields);
                    }

                    console.log($scope.nutritionresults);

                });
                handler.error(function (result) {
                    alert("There was some error processing your request. Please try after some time.")
                })
            }

        }

    });
