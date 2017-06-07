'use strict';

var app = angular.module('KawaniApp');

app.config(runConfig);

runConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function runConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.hashPrefix('!');

    $stateProvider
    .state('company-list', {
        url: '/companies',
        component: 'companies',
    });
}
