
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ledefedit = {};	// @button
	var documentEvent = {};	// @document
	var twob_ok = {};	// @button
	var twob_cancel = {};	// @button
	var idquerystring = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	ledefedit.click = function ledefedit_click (event)// @startlock
	{// @endlock
		$$('twob_dialog').displayDialog();
		$$('twob_dialog').addClass('le_def_edit');
		$$('twob_dialog_comp').loadComponent({ 
    		path: "/webcomps/le_def.waComponent",
    		userData: { dialogtitle: "Specific data"},
    		onSuccess: function () {
                //do something here;
       		}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//hide generic two button dialog
		$$('twob_dialog').addClass('hidetop');
		$$('twob_dialog').closeDialog();

	};// @lock

	twob_ok.click = function twob_ok_click (event)// @startlock
	{// @endlock
		$$('twob_dialog').closeDialog(); //ok button
	};// @lock

	twob_cancel.click = function twob_cancel_click (event)// @startlock
	{// @endlock
		$$('twob_dialog').closeDialog(); //cancel button
	};// @lock

	idquerystring.keyup = function idquerystring_keyup (event)// @startlock
	{// @endlock
		var theName = $$("idquerystring").getValue();
		sources.landscapeElement.query('name = :1 order by name', { params: [theName + "*"]});

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ledefedit", "click", ledefedit.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("twob_ok", "click", twob_ok.click, "WAF");
	WAF.addListener("twob_cancel", "click", twob_cancel.click, "WAF");
	WAF.addListener("idquerystring", "keyup", idquerystring.keyup, "WAF");
// @endregion
};// @endlock
