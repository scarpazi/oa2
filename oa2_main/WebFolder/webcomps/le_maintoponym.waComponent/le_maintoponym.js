
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'le_maintoponym';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button4 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialog1")).closeDialog(); //ok button
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		$$(getHtmlId("dialog1")).closeDialog(); //cancel button
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_button4", "click", button4.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
