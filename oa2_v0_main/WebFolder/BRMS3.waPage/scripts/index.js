
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var isChecked = $('#checkbox2').prop('checked');

	};// @lock
if ($('#checkbox2').is(':checked')) {

   $('#autoForm3').show();

} else {

   $('#autoForm3').hide();

}

};



// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
// @endregion
};// @endlock
