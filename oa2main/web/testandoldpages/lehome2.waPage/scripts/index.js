
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var defButton = {};	// @button
	var documentEvent = {};	// @document
	var leDialogOk = {};	// @button
	var leDialogCancel = {};	// @button
	var idquerystring = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	defButton.click = function defButton_click (event)// @startlock
	{// @endlock
		$$('leDialog').displayDialog();
		$$('leDialog').addClass('leDefEdit');
		$$('leDialogComp').loadComponent({ 
    		path: "/webcomps/leDef.waComponent",
    		userData: { dialogtitle: "Specific data"},
    		onSuccess: function () {
                //do something here;
       		}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//hide generic two button dialog
		$$('leDialog').addClass('hidetop');
		$$('leDialog').closeDialog();

	};// @lock

	// lebDialog buttons (ok and cancel)
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

// query on keyup
	idquerystring.keyup = function idquerystring_keyup (event)// @startlock
	{// @endlock
		var theName = $$("idquerystring").getValue();
		sources.leMainDs.query('name = :1 order by name', { params: [theName + "*"]});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("defButton", "click", defButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("leDialogOk", "click", leDialogOk.click, "WAF");
	WAF.addListener("leDialogCancel", "click", leDialogCancel.click, "WAF");
	WAF.addListener("idquerystring", "keyup", idquerystring.keyup, "WAF");
// @endregion
};// @endlock
