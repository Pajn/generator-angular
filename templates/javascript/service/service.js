class <%= classedName %> {
	constructor() {}
}

export default angular.module('<%= cameledName %>', [])
	.service('<%= cameledName %>', <%= classedName %> );
