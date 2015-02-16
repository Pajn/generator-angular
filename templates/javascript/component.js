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
      templateUrl: 'partials/<%= name %>.html',
      restrict: 'E',
      scope: {
        // Specify attributes where parents can pass and receive data here
        // Syntax name: 'FLAG'
        // FLAGS:
        // = Two way data binding
        // @ One way incomming expression (like placeholder)
        // & One way outgoing behaviout (like ng-click)
      }
    };
  });
