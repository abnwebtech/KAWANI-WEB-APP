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

    var app = angular.module('employee-detail');

    app.component('employeeDetail', {
        controller: ['$scope', '$stateParams', 'EmployeeService', function($scope, $stateParams, EmployeeService) {

            $scope.employeeDetail = [];
            $scope.employeeId = $stateParams.employeeId;

            EmployeeService.getEmployee($scope.employeeId).then(function (res) {
                $scope.employeeDetail = res.data.result;
            });

            $scope.clickHandler = function() {
                alert('something happened!');
            }

        }],
        templateUrl: 'app/components/employee-detail/employee-detail.template.html',
    });

})();
