angular.module('app.controllers', [])
  
.controller('mainCtrl', function($scope, $location) {
  
  
  $scope.items = [
    {title: "dashboard", href: "home", icon:"ion-home"},
    {title: "catalogue", href: "cart", icon: "ion-erlenmeyer-flask"},
    {title: "account", href: "cloud", icon:"ion-waterdrop"},
    {title: "settings", href: "settings", icon:"ion-gear-a"}
  ];

})
  
  
.controller('homeCtrl', function($scope) {
    
    
    $scope.gamesFeatured = [];
    
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
        
        
        console.log($scope.gamesFeatured);
    },
    error: function(error) {
        alert("Error: " + error.code + " " + error.message);
    }
    });

})
   
.controller('cartCtrl', function($scope) {

    

})
   
.controller('cloudCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
    