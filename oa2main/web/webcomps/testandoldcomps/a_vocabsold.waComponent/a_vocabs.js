
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'a_vocabs';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var secondarylemmasEvent = {};	// @dataSource
	// @endregion// @endlock

	// eventHandlers// @lock

	secondarylemmasEvent.onBeforeCurrentElementChange = function secondarylemmasEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		if (this.dicname != sources.lemmas.dicname) {
			this.dicname.set(sources.lemmas.dicname);
			this.save();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_secondarylemmas", "onBeforeCurrentElementChange", secondarylemmasEvent.onBeforeCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
