
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button6 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		var1 = dictionaryLemma.primarylemma.count();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.dictionaryLemma.query('plvalue = :1 order by plvalue', {params : [queryStr + '*']});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//$('#button1')).bt('I am an H2 element!', {
		//	trigger: 'focus',
		//	positions: 'top',
		//	offsetParent :'body'
		//});

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
