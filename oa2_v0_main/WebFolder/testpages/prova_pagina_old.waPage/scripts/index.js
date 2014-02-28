
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var search = {};	// @button
	var livequery = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	search.click = function search_click (event)// @startlock
	{// @endlock
		sources.site.query('name = :1 order by name', {params : [queryStr + '*']});
	};// @lock

	livequery.keyup = function livequery_keyup (event)// @startlock
	{// @endlock
		var theName = $$("livequery").getValue();
		sources.site.query('name = :1 order by name', { params: [theName + "*"]});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("search", "click", search.click, "WAF");
	WAF.addListener("livequery", "keyup", livequery.keyup, "WAF");
// @endregion
};// @endlock
