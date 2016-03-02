
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'leMainData';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var defButton = {};	// @button
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_defButton", "click", defButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
