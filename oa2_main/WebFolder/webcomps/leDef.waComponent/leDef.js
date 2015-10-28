
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'leDef';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var combobox2 = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	combobox2.change = function combobox2_change (event)// @startlock
	{// @endlock
		//sources.leMainDs.def1Obj.set(sources.ledefDiclemma);

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_combobox2", "change", combobox2.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
