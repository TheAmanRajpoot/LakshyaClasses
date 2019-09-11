lakshyaApp.controller('HeaderController', function ($scope, $rootScope, $stateParams, $state) {
   
    $scope.goToHome = function () {
        $state.go('Header.Home');
    }

    $scope.goToAboutUs = function () {
        $state.go('Header.AboutUs');
    }

    $scope.goToCourse = function () {
        $state.go('Header.Course');
    }

    $scope.goToContact = function () {
        $state.go('Header.Contact');
    }

    $scope.goToLogin = function(){
        $state.go('Login');
    }
});