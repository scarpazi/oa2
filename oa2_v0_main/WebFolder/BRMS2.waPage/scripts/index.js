
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$('autoForm8').toggle();
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$('autoForm7').toggle();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('autoForm3').toggle();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
