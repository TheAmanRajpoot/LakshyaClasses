var lakshyaApp = angular.module('LakshyaClasses', ['ui.router']);

lakshyaApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('Header', {
            // url: '/header',
           
            templateUrl: 'app/views/shared/header.html',
            abstract: true,
            controller: 'HeaderController',
            // stateParams: {myData: null}
        })

        .state('Header.Home', {
            url: '/Home',
            templateUrl: 'app/views/home.html',
            controller: 'HomeController',
           
        })

        .state('Header.AboutUs', {
            url: '/AboutUs',
            templateUrl: 'app/views/aboutUs.html',
            // controller: 'HomeController',
           
        })

        .state('Header.Course', {
            url: '/Course',
            templateUrl: 'app/views/course.html',
            // controller: 'HomeController',
           
        })
        .state('Header.Contact', {
            url: '/Contact',
            templateUrl: '/app/views/contact.html',
            controller: 'ContactController',
           params: {myData: null}
        })

        .state('Header.Blog', {
            url: '/Blogs',
            templateUrl: '/app/views/blog.html',
            // controller: 'ContactController',
        //    params: {myData: null}
        })

        .state('Login', {
            url: '/login',
            templateUrl: '/app/views/login.html',
            // controller: 'uploadController'
        });
    });