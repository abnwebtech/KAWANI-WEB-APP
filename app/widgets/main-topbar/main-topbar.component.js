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

    var app = angular.module('main-topbar', []);

    app.component('mainTopbar', {
        templateUrl: 'app/widgets/main-topbar/main-topbar.template.html',
        scope: {},
        controller: ['$scope', function($scope) {
            console.log('main topbar');
        }]
    });
})();
