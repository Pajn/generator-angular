'use strict';

function <%= classedName %>(scope, element, attrs) {
  element.text('this is the <%= cameledName %> directive');
}

export default angular.module('<%= moduleDot %><%= cameledName %>', [])
  .directive('<%= cameledName %>', () => ({
    restrict: 'A',
    link: <%= classedName %>,
  }));
