
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'toponym_manager';
	// @endregion// @endlock

	this.load = function (data) {// @lock
//		debugger;
		var dic = ds.Dictionary.query('name == toponym.definition');
		ds.d_toponym_def = dic.toArray("dictionary_lemmas");

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
