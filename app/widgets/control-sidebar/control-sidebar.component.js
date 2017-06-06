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

    var app = angular.module('control-sidebar', []);

    app.component('controlSidebar', {
        templateUrl: 'app/widgets/control-sidebar/control-sidebar.template.html',
        scope: {},
        controller: ['$scope', function($scope) {
            console.log('main footer');
        }]
    });
})();
