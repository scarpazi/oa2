
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var homeDialogOk = {};	// @button
	var homeDialogCanc = {};	// @button
	var info = {};	// @Image
// @endregion// @endlock

// eventHandlers// @lock

	homeDialogOk.click = function homeDialogOk_click (event)// @startlock
	{// @endlock
		$$('homeDialog').closeDialog(); //ok button
	};// @lock

	homeDialogCanc.click = function homeDialogCanc_click (event)// @startlock
	{// @endlock
		$$('homeDialog').closeDialog(); //cancel button
	};// @lock

	info.click = function info_click (event)// @startlock
	{// @endlock
		$$('homeDialog').displayDialog();
		$$('homeDialog').addClass('infoDialog');
		$$('homeDialogComp').loadComponent({ 
    		path: "/webcomps/infoIt.waComponent",
    		//userData: { dialogtitle: "Info"},
    		onSuccess: function () {
				$$('homeDialogTitle').setValue("oa2 - Info");
				$$('homeDialogIcon').setValue("/images/info2.gif");
				$$('homeDialogOk').hide();
 				$$('homeDialogCanc').hide();
      		}
		});

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("homeDialogOk", "click", homeDialogOk.click, "WAF");
	WAF.addListener("homeDialogCanc", "click", homeDialogCanc.click, "WAF");
	WAF.addListener("info", "click", info.click, "WAF");
// @endregion
};// @endlock
