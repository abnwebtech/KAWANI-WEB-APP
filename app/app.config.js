'use strict';

var app = angular.module('KawaniApp');

app.config(runConfig);

runConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function runConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.hashPrefix('!');

    $stateProvider
    .state('employeelist', {
        url: '/employees',
        component: 'employees',
    })
    .state('employeelist.detail', {
        url: '/:employeeId',
        component: 'employeeDetail',
    })
    .state('test', {
        url: '/test',
        controller: 'TestController',
        templateUrl: 'app/components/test/test.template.html'
    });
}
