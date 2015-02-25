'use strict';

describe('Component: <<%= tagName %>>', function () {

  // load the directive's module
  beforeEach(module('<%= cameledName %>'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<<%= tagName %>></<%= tagName %>>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the <<%= tagName %>> component');
  }));
});
