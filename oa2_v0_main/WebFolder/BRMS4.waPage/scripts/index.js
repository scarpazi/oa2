
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button5 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		var isChecked = $('#checkbox2').prop('checked');

$('#autoForm7').toggle(isChecked);
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var isChecked = $('#checkbox2').prop('checked');

$('#autoForm7').toggle(isChecked);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
// @endregion
};// @endlock
