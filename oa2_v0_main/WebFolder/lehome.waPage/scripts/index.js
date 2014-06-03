
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var chooseToponym = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	chooseToponym.click = function chooseToponym_click (event)// @startlock
	{// @endlock
		this.setTextColor("red");
		$$('t_chooser').show();
		//$$('t_chooser').move(20,20)
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("chooseToponym", "click", chooseToponym.click, "WAF");
// @endregion
};// @endlock
