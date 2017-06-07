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

    var app = angular.module('service.company', []);

    app.factory('CompanyService', ['$q', '$http', function($q, $http) {

        var baseURL = 'http://localhost/kawani/restful_api/api/companies';

        var getCompanies = function () {
            var defer = $q.defer();

            $http.get(baseURL).then(function (response) {
                defer.resolve(response);
            });

            return defer.promise;
        }

        return {
            getCompanies : getCompanies
        };

    }]);
})();
