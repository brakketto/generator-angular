'use strict';

/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.directive:<%= cameledName %>
 * @description
 * # <%= cameledName %>
 */
angular.module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', function () {
    return {
      templateURL: 'shared/directive/<%= name %>/<%= name %>.html',
      restrict: 'E'
    };
  });
