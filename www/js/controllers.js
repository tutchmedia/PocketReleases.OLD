angular.module('app.controllers', [])
  
.controller('mainCtrl', function($scope, $location) {
  
  
  $scope.items = [
    {title: "dashboard", href: "home", icon:"ion-home"},
    {title: "catalogue", href: "cart", icon: "ion-erlenmeyer-flask"},
    {title: "account", href: "cloud", icon:"ion-waterdrop"},
    {title: "settings", href: "settings", icon:"ion-gear-a"}
  ];

})
  
  
.controller('homeCtrl', function($scope, $rootScope) {
    
    
     $scope.gamesFeatured = [];
     
     $rootScope.online = false;
        
    if(!$rootScope.online)
    {
        console.log("OFFLINE");
        var results = [{"objectId":"LhgsFuRIZr","ww_release":"true","game_publisher":"Warner Brothers","gameCover":"http://files.parsetfss.com/405ba891-ee13-4040-a549-21b3aef315f8/tfss-620b000b-dd71-4fe9-81c2-631d3d39f284-1443717265972.png","game_developer":"Travellers Tales","release_uk":{"__type":"Date","iso":"2016-05-21T00:01:00.000Z"},"release_us":{"__type":"Date","iso":"2015-09-29T00:01:00.000Z"},"gameTitle":"Lego Dimensions","gameHeader":"http://files.parsetfss.com/405ba891-ee13-4040-a549-21b3aef315f8/tfss-7c96cc23-b8a6-4bcf-84d5-e61812c38ac3-1443717265973.jpg","updatedAt":"2016-03-18T21:40:46.129Z","release_eu":{"__type":"Date","iso":"2015-09-29T00:01:00.000Z"},"createdAt":"2015-10-01T16:34:28.522Z"},{"objectId":"DOoTVKcGRY","createdAt":"2015-05-17T16:03:43.444Z","release_eu":{"__type":"Date","iso":"2015-10-23T00:00:00.000Z"},"gameCover":"http://files.parsetfss.com/405ba891-ee13-4040-a549-21b3aef315f8/tfss-b011459a-6409-4241-9db1-7114a206a546-1431878686375.jpg","gameHeader":"http://files.parsetfss.com/405ba891-ee13-4040-a549-21b3aef315f8/tfss-1c148814-63b5-4ae1-a145-685dbca3c5bd-1431878617676.png","game_publisher":"Ubisoft","release_uk":{"__type":"Date","iso":"2016-05-25T00:00:00.000Z"},"gameTitle":"Assasins Creed: Syndicate","game_developer":"Ubisoft Quebec","release_us":{"__type":"Date","iso":"2015-10-23T00:00:00.000Z"},"updatedAt":"2016-03-18T21:52:16.056Z"}];
        
        for (var i = 0; i < results.length; i++) {
        var object = results[i];
            console.log(object);
            $scope.gamesFeatured.push(object);
        }
    } else {
        // Online Stuff
        
        var Games = Parse.Object.extend("games");
        var query = new Parse.Query(Games);
        query.greaterThan("release_uk", new Date());
        query.find({
        success: function(results) {
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
            var object = results[i];
                //alert(object.id + ' - ' + object.get('playerName'));
                $scope.gamesFeatured.push(object);
            }
            
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
        });
    }
    
})
   
.controller('cartCtrl', function($scope) {

    

})
   
.controller('cloudCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
    