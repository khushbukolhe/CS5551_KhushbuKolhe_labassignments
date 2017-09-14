var app = angular.module("myApp", []);



app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);
});

app.controller('youtubeController', function ($scope, $http) {

        $scope.mostRecentReview;
    $scope.availableLangs={};

    $scope.getIframeSrc = function(src) {
        return 'https://www.youtube.com/embed/' + src;
    };

        $scope.searchVideo = function () {
            $scope.videoIDs = [];
            var searchEntered = $scope.searchTextforVideos;
            if (searchEntered != null && searchEntered != "") {

                function start() {
                    // 2. Initialize the JavaScript client library.
                    gapi.client.init({
                        'apiKey': 'AIzaSyDe_CyiYRbtLcHQPMxqEt0UxlMiejdxNHw'

                    }).then(function() {

                        // 3. Initialize and make the API request.
                        return gapi.client.request({
                            'path' : 'https://www.googleapis.com/youtube/v3/search?part=snippet' +
                            '&q=' + searchEntered +
                            '&maxResults=3'+
                            '&type=video' +
                            '&videoCaption=closedCaption' +
                            '&key=AIzaSyDe_CyiYRbtLcHQPMxqEt0UxlMiejdxNHw&'
                        })
                    }).then(function(response) {
                        console.log(response.result);

                        JSON.parse(response.body).items.forEach(function(video) {
                           $scope.videoIDs.push({
                               id: video.id.videoId,
                               title: video.snippet.channelTitle,
                               url: "https://www.youtube.com/embed/" + video.id.videoId.toString()
                           })
                        });

                        // $scope.videoIDs = JSON.parse(response.body).items;
                        $scope.$apply();


                    }, function(reason) {
                        console.log('Error: ' + reason.result.error.message);
                    });
                };
                // 1. Load the JavaScript client library.
                gapi.load('client', start);
            }
        };


        $scope.getLanguages=function(){
            var url = "https://translate.yandex.net/api/v1.5/tr.json/getLangs?";
            var  keyAPI ="trnsl.1.1.20170909T220356Z.bd1d64e0c2398b63.902e8a3de80b02926c4d8a9ab8de41043cb5eca3";
            $scope.getLanguagesArr=[];
           // $scope.availableLangs={};


            $http({
                url: url,
                method:"POST",
                params:{key:keyAPI,ui:'en'}
            }).then(function(response){
                console.log(response);

             $scope.availableLangs=response.data.langs;
                 // angular.forEach(response.data.langs,function(key,value){
                 //
                 //     if(value == selectedLang){
                 //
                 //         $scope.getKey=key;
                 //     }
                 // });


            }, function(reason){
                console.log(reason);
            });


        };

        $scope.translateWord=function () {

            $scope.getLanguages();
            $scope.getValue;

           angular.forEach($scope.availableLangs,function(key,value){
               if (key == $scope.selectedLang){

                   $scope.getValue=value;
                   console.log($scope.getValue);
               }

           });

            if (txt_SearchBox!=null) {

                var textApi=$scope.searchText;
                var langApi='en-' + $scope.getValue;
                //var langApi='en-hi';
                var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?";
                var  keyAPI ="trnsl.1.1.20170909T220356Z.bd1d64e0c2398b63.902e8a3de80b02926c4d8a9ab8de41043cb5eca3";


                $http({
                    url: url,
                    method:"POST",
                    params:{key:keyAPI,text:textApi,lang:langApi}
                }).then(function(response){
                    console.log(response);
                    $scope.langTranslate=response.data.text[0];

                }, function(reason){
                    console.log(reason);
                });

            }
        };
    });
