
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'toponym_chooser';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var t_choose = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	t_choose.click = function t_choose_click (event)// @startlock
	{// @endlock
		sources.landscapeElement.main_toponym.set(sources.toponym);
		sources.landscapeElement.save();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_t_choose", "click", t_choose.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
