// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform,$rootScope,$cordovaPushV5) {
    $ionicPlatform.ready(function () {



        //#region push notification

        var options = {
            android: {
                senderID: "763986669211"
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            },
            windows: {}
        };

        // initialize
        $cordovaPushV5.initialize(options).then(function () {
            // start listening for new notifications
            $cordovaPushV5.onNotification();
            // start listening for errors
            $cordovaPushV5.onError();

            // register to get registrationId
            $cordovaPushV5.register().then(function (registrationId) {
                window.localStorage.setItem("token", registrationId)
                //$scope.registrationId = registrationId;
                // save `registrationId` somewhere;
            })
        });

        // triggered every time notification received
        $rootScope.$on('$cordovaPushV5:notificationReceived', function (event, data) {

            //$scope.data = data;
            //$scope.message = data.message;
            //$scope.title = data.title;
            
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
        });

        // triggered every time error occurs
        $rootScope.$on('$cordovaPushV5:errorOcurred', function (event, e) {
            // e.message
        });



        //#endregion
        //end of push notification region 


    if(cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
