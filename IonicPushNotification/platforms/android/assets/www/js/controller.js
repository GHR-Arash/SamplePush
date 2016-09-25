

(function () {
    'use strict';

    angular
      .module('starter')
      .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = ['$scope'];

    function indexCtrl($scope) {

        $scope.registrationId = window.localStorage.getItem("token");



        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() {

            $scope.registerApp = function () {
                $scope.registrationId = window.localStorage.getItem("token");

                if ($scope.registrationId == undefined) {
                    $scope.registrationId = "undefined";
                }
                console.log('application is registered')
            }
        }
    }
})();
