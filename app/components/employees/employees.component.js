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

    var app = angular.module('employee-list');

    app.component('employees', {
        controller: ['$scope', 'EmployeeService', function($scope, EmployeeService) {

            $scope.employees = [];

            EmployeeService.list().then(function (res) {
                $scope.employees = res.data.result;
            });

            $scope.clickHandler = function() {
                alert('something happened!');
            }

        }],
        templateUrl: 'app/components/employees/employees.template.html',
    });

})();
