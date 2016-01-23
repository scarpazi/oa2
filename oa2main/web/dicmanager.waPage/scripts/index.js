
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// *** Opentip tooltips ***
		var oa2logoTip = new Opentip($("#oa2logo"));
		oa2logoTip.setContent("a wholly different archaeological management system");
		
		// *** load components ***
		$$('diclemmaComponent').loadComponent ({ 
			path: "/webcomps/diclemma.waComponent", 
			userData: {loadFlag: true},
			onSuccess: function () {
				//alert('load success');
     			$$('diclemmaComponent_lSearchTextfield').setValue("");
		    	$$('diclemmaComponent_plSearchCheckbox').setValue(false);
				sources.dictionaryLemma.all();
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
