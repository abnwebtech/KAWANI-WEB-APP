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

    var app = angular.module('main-sidebar', []);

    app.component('mainSidebar', {
        templateUrl: 'app/widgets/main-sidebar/main-sidebar.template.html',
        scope: {},
        controller: ['$scope', function($scope) {
            console.log('main sidebar');
        }]
    });
})();
