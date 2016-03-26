
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'aDict';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dictionaryEvent = {};	// @dataSource
	// @endregion// @endlock

	// eventHandlers// @lock

	dictionaryEvent.onCurrentElementChange = function dictionaryEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var theDic = $$(getHtmlId('dicGrid')).column(2).getValueForInput();
		sources.dictionaryLemma.query('dicname is :1', { params: [theDic]});

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener("dictionary", "onCurrentElementChange", dictionaryEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
