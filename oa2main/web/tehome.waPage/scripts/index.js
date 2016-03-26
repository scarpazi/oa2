
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var oa2Info = {};	// @buttonImage
	var teDialogOk = {};	// @button
	var teDialogCanc = {};	// @button
	var simpleSearch = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	oa2Info.click = function oa2Info_click (event)// @startlock
	{// @endlock
		$$('teDialog').displayDialog();
		$$('teDialog').addClass('infoDialog');
		$$('teDialogComp').loadComponent({ 
    		path: "/webcomps/infoIt.waComponent",
    		//userData: { dialogtitle: "Info"},
    		onSuccess: function () {
				$$('teDialogTitle').setValue("oa2 - Info");
				$$('teDialogIcon').setValue("/images/info2.gif");
				$$('teDialogOk').hide();
 				$$('teDialogCanc').hide();
      		}
		});

	};// @lock

	teDialogOk.click = function teDialogOk_click (event)// @startlock
	{// @endlock
		$$('teDialog').closeDialog(); //ok button
	};// @lock

	teDialogCanc.click = function teDialogCanc_click (event)// @startlock
	{// @endlock
		$$('teDialog').closeDialog(); //cancel button
	};// @lock

	simpleSearch.keyup = function simpleSearch_keyup (event)// @startlock
	{// @endlock
		//var theName = $$("idquerystring").getValue();
		//sources.teMainDs.query('name = :1 order by name', { params: [theName + "*"]});
		var simpleSearchString = $$("simpleSearch").getValue();
		sources.teMainDs.query('name = :1 OR internalName = :1 OR defComplete = :1 OR chronTextCalc = :1 order by name', { params: [simpleSearchString + "*"]});

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("oa2Info", "click", oa2Info.click, "WAF");
	WAF.addListener("teDialogOk", "click", teDialogOk.click, "WAF");
	WAF.addListener("teDialogCanc", "click", teDialogCanc.click, "WAF");
	WAF.addListener("simpleSearch", "keyup", simpleSearch.keyup, "WAF");
// @endregion
};// @endlock
