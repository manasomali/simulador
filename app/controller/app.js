var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/consumidorlivre/simulador/", {
        templateUrl : "consumidorlivre/simulador/app/view/painel.html",
        controller : "painelCtrl"
    });
    $locationProvider.html5Mode(true);
});