
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'lemain';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var textField1 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		var theName = $$(getHtmlId('idquerystring')).getValue();
		$comp.sources.landscapeElement.query('name = :1 order by name', { params: [theName + "*"]});

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_textField1", "keyup", textField1.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
