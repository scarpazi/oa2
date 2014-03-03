
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button15 = {};	// @button
	var button13 = {};	// @button
	var button12 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button15.click = function button15_click (event)// @startlock
	{// @endlock
		$$('autoForm15').toggle();
	};// @lock

	button13.click = function button13_click (event)// @startlock
	{// @endlock
		$$('autoForm16').toggle();
	};// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
$$('autoForm17').toggle();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button15", "click", button15.click, "WAF");
	WAF.addListener("button13", "click", button13.click, "WAF");
	WAF.addListener("button12", "click", button12.click, "WAF");
// @endregion
};// @endlock
