
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'diclemmaSetdic';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dicSet = {};	// @button
	var dicRemove = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	dicSet.click = function dicSet_click (event)// @startlock
	{// @endlock
		sources.dictionaryLemma.dicobject.set(sources.dicChoice);

	};// @lock

	dicRemove.click = function dicRemove_click (event)// @startlock
	{// @endlock
		sources.dictionaryLemma.dicobject.set(null);

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dicSet", "click", dicSet.click, "WAF");
	WAF.addListener(this.id + "_dicRemove", "click", dicRemove.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
