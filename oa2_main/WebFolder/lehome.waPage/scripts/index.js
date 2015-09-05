
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ledefedit = {};	// @button
	var documentEvent = {};	// @document
	var twobok = {};	// @button
	var twobcancel = {};	// @button
	var idquerystring = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	ledefedit.click = function ledefedit_click (event)// @startlock
	{// @endlock
		$$('twobDialog').displayDialog();
		$$('twobDialog').addClass('le_def_edit');
		$$('twobcomp').loadComponent({ 
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
		$$('twobDialog').addClass('hidetop');
		$$('twobDialog').closeDialog();

	};// @lock

// twobDialog buttons (ok and cancel)
	twobok.click = function twobok_click (event)// @startlock
	{// @endlock
		$$('twobDialog').closeDialog(); //ok button
	};// @lock

	twobcancel.click = function twobcancel_click (event)// @startlock
	{// @endlock
		$$('twobDialog').closeDialog(); //cancel button
	};// @lock

// query on keyup
	idquerystring.keyup = function idquerystring_keyup (event)// @startlock
	{// @endlock
		var theName = $$("idquerystring").getValue();
		sources.landscapeElement.query('name = :1 order by name', { params: [theName + "*"]});

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ledefedit", "click", ledefedit.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("twobok", "click", twobok.click, "WAF");
	WAF.addListener("twobcancel", "click", twobcancel.click, "WAF");
	WAF.addListener("idquerystring", "keyup", idquerystring.keyup, "WAF");
// @endregion
};// @endlock
