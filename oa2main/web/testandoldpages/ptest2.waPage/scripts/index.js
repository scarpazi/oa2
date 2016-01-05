
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		sources.landscapeElement.mainToponym.set(sources.toponym);
		sources.landscapeElement.save();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		sources.landscapeElement.def2Obj.set(sources.dictionaryLemma);
		sources.landscapeElement.save();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		sources.landscapeElement.def1Obj.set(sources.dictionaryLemma);
		sources.landscapeElement.save();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
