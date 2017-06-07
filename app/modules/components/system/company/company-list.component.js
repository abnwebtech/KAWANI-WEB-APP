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

    var app = angular.module('system');

    app.component('companies', {
        controller: ['$scope', 'CompanyService', function($scope, CompanyService) {

            $scope.companies = [];

            CompanyService.getCompanies().then(function (res) {
                $scope.companies = res.data.result;
                console.log('result: ', $scope.companies);
            });

            $scope.clickHandler = function() {
                alert('something happened!');
            }

        }],
        templateUrl: 'app/modules/components/system/company/company-list.template.html',
    });

})();
