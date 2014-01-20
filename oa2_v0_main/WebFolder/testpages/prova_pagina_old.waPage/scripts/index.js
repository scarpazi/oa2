
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var livequery = {};	// @textField
	var search = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	livequery.keyup = function livequery_keyup (event)// @startlock
	{// @endlock
		var theName = $$("livequery").getValue();
		sources.site.query('name = :1 order by name', { params: [theName + "*"]});
	};// @lock

	search.click = function search_click (event)// @startlock
	{// @endlock
		sources.site.query('name = :1 order by name', {params : [queryStr + '*']});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("livequery", "keyup", livequery.keyup, "WAF");
	WAF.addListener("search", "click", search.click, "WAF");
// @endregion
};// @endlock
