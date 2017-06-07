'use strict';

var app = angular.module('KawaniApp', [
    'ui.router',
    'com.kawani.widgets',
    'com.kawani.services',
    'com.kawani.modules'
]);

app.run(['$state', function($state) {
    // console.log('wew');
}]);
