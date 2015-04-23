'use strict';

function <%= classedName %>() {
  return '<%= cameledName %> filter: ' + input;
}

export default angular.module('<%= moduleDot %><%= cameledName %>', [])
  .filter('<%= cameledName %>', () => <%= classedName %>);
