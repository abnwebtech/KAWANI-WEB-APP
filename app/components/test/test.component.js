/**
 * Some class description here...
 *
 * @package     package
 * @subpackage  subpackage
 * @category    category
 * @author      cristhian.kevin@systemantech.com
 * @link        http://systemantech.com
 */
(function() {
    'use strict';

    var app = angular.module('test', []);

    app.controller(TestController);

    TestController.$inject = ['$scope'];

    function TestController($scope) {
        $scope.clickHandler = function () {
            console.log('something happened!');
        }
    }
})();
