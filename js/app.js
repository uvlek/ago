var app = angular.module('app', ['ngRoute']);

app.controller('controller', function($scope) {});

app.config(function($routeProvider) {
    $routeProvider.when('/projects', {
        controller: 'controller',
        templateUrl: 'templates/projects.html'
    });

    $routeProvider.when('/info', {
        controller: 'controller',
        templateUrl: 'templates/info.html'
    });

    $routeProvider.when('/tec', {
        controller: 'controller',
        templateUrl: 'templates/tec.html'
    });

    $routeProvider.when('/', {
        controller: 'controller',
        templateUrl: 'templates/main.html'
    });
});