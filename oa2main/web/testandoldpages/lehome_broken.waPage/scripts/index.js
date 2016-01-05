
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// set widget sizes and positions
		$$('main_menuItem').setWidth(100)
		$$('GIS_menuItem').setWidth(100)
		$$('media_menuItem').setWidth(100)
		$$('social_menuItem').setWidth(100)
		$$('repo_menuItem').setWidth(100)
		$$('stat_menuItem').setWidth(100)
		$$('settings_menuItem').setWidth(100)
		
		$$('titlebar').setWidth(1600)
		$$('le_maintab').resize(1600,1000)
		$$('le_maintab').setTop(100)
		
		

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
