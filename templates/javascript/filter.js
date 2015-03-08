'use strict';

function <%= classedName %>() {
  return '<%= cameledName %> filter: ' + input;
}

export default angular.module('<%= cameledName %>', [])
  .filter('<%= cameledName %>', () => <%= classedName %>);
