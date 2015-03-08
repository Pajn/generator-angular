'use strict';

class <%= classedName %> {
	constructor() {}
}

export default angular.module('<%= cameledName %>', [])
	.directive('<%= cameledName %>', () => ({
    templateUrl: 'components/<%= tagName %>/<%= tagName %>.html',
    restrict: 'E',
    scope: {
      // Specify attributes where parents can pass and receive data here
      // Syntax name: 'FLAG'
      // FLAGS:
      // = Two way data binding
      // @ One way incoming expression (like placeholder)
      // & One way outgoing behaviour (like ng-click)
    },
    bindToController: true,
    controller: <%= classedName %> ,
    controllerAs: 'ctrl',
	}));
