
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//$('#button1')).bt('I am an H2 element!', {
		//	trigger: 'focus',
		//	positions: 'top',
		//	offsetParent :'body'
		//});

	};// @lock

	button1.mouseover = function button1_mouseover (event)// @startlock
	{// @endlock

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button1", "mouseover", button1.mouseover, "WAF");
// @endregion
};// @endlock
