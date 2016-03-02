
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var simpleSearch = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	simpleSearch.keyup = function simpleSearch_keyup (event)// @startlock
	{// @endlock
		//var theName = $$("idquerystring").getValue();
		//sources.teMainDs.query('name = :1 order by name', { params: [theName + "*"]});
		var simpleSearchString = $$("simpleSearch").getValue();
		sources.teMainDs.query('name = :1 OR internalName = :1 OR defComplete = :1 OR chronTextCalc = :1 order by name', { params: [simpleSearchString + "*"]});

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("simpleSearch", "keyup", simpleSearch.keyup, "WAF");
// @endregion
};// @endlock
