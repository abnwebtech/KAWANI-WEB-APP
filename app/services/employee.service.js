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

    var app = angular.module('service.employee', []);

    app.factory('EmployeeService', ['$q', '$http', function($q, $http) {

        var baseURL = 'http://localhost/kawani/restful_api/api/employees';

        var getEmployees = function () {
            var defer = $q.defer();

            $http.get(baseURL).then(function (response) {
                defer.resolve(response);
            });

            return defer.promise;
        }

        var list = function () {
            var defer = $q.defer();

            $http.get(baseURL).then(function (response) {
                console.log('response: ', response);
                defer.resolve(response);
            });

            return defer.promise;
        }

        var getEmployee = function (employeeId) {
            var defer = $q.defer();

            $http.get(baseURL + '/' + employeeId).then(function (response) {
                defer.resolve(response);
            });

            return defer.promise;
        }

        return {
            list        : list,
            getEmployee : getEmployee
        };

    }]);
})();
