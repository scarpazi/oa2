
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'lemain';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var idquerystring = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	idquerystring.keyup = function idquerystring_keyup (event)// @startlock
	{// @endlock
		var theName = $$("idquerystring").getValue();
		sources.landscapeElement.query('name = :1 order by name', { params: [theName + "*"]});
	
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_idquerystring", "keyup", idquerystring.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
