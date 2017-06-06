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

    var app = angular.module('main-footer', []);

    app.component('mainFooter', {
        templateUrl: 'app/widgets/main-footer/main-footer.template.html',
        scope: {},
        controller: ['$scope', function($scope) {
            $scope.clientCompanyName = 'Aspiree';
            $scope.systemDeveloper = 'Lohica';
        }]
    });
})();
