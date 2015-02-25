'use strict';

export default angular.module('<%= cameledName %>', [])
  .directive('<%= cameledName %>', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('this is the <%= cameledName %> directive');
      }
    };
  });
