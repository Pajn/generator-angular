export default angular.module('<%= cameledName %>', [])
  .directive('<%= cameledName %>', () => ({
    restrict: 'A',
    link: function link(scope, element, attrs) {
      element.text('this is the <%= cameledName %> directive');
    }
  }));
