# AngularJS generator

> Opinionated Yeoman generator for AngularJS - lets you quickly generate components that uses ES6
> and tries to follow idas from Angular 2 and Web Components

## Usage

Install `generator-ng`:
```
npm install -g Pajn/generator-angular
```


## Generators

Available generators:

* [ng:animation](#animation)
* [ng:component](#component)
* [ng:directive](#directive)
* [ng:filter](#filter)
* [ng:service](#service)
* [ng:value](#service)
* [ng:constant](#service)

### Component
Generates a directive set up similar to an Angular 2 component in `app/components`.

Example:
```bash
yo ng:component my-component
```

Produces `app/components/my-component/my-component.js`:
```javascript
class MyComponent {
	constructor() {}
}

export default angular.module('myComponent', [])
	.directive('myComponent', () => ({
    templateUrl: 'components/my-component/my-component.html',
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
    controller: MyComponent ,
    controllerAs: 'ctrl',
	}));
```
Also produces
```
app/components/my-component/my-component.html
app/components/my-component/my-component.scss
```

### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo ng:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
function MyDirective(scope, element, attrs) {
  element.text('this is the myDirective directive');
}

export default angular.module('myDirective', [])
  .directive('myDirective', () => ({
    restrict: 'A',
    link: MyDirective,
  }));
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo ng:filter myFilter
```

Produces `app/scripts/filters/myFilter.js`:
```javascript
function MyFilter() {
  return 'myFilter filter: ' + input;
}

export default angular.module('myFilter', [])
  .filter('myFilter', () => MyFilter);
```

### Service
Generates an AngularJS service.

Example:
```bash
yo ng:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
class MyService {
	constructor() {}
}

export default angular.module('myService', [])
	.service('myService', MyService);
```

You can also do `yo ng:value`, and `yo ng:constant` for other types of services.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
