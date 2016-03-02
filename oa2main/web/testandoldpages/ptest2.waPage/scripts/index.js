
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button4 = {};	// @button
	var leDialogOk = {};	// @button
	var leDialogCancel = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

	leDialogOk.click = function leDialogOk_click (event)// @startlock
	{// @endlock
		//ok button: sets the selected primary lemma and saves the entity
		//sources.leMainDs.save();		
		$$('leDialog').closeDialog(); 

	};// @lock

	leDialogCancel.click = function leDialogCancel_click (event)// @startlock
	{// @endlock
		//cancel button
		//sources.leMainDs.primarylemma.set(pltemp);
		//sources.leMainDs.save();		
		$$('leDialog').closeDialog(); //cancel button

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("leDialogOk", "click", leDialogOk.click, "WAF");
	WAF.addListener("leDialogCancel", "click", leDialogCancel.click, "WAF");
// @endregion
};// @endlock
