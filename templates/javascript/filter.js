export default angular.module('<%= cameledName %>', [])
  .filter('<%= cameledName %>', () => () => {
    return '<%= cameledName %> filter: ' + input;
  });
