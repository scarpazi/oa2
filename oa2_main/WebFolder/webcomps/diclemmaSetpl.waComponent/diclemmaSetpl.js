
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'diclemmaSetpl';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var plFindallButton = {};	// @buttonImage
	var plSearchCombo = {};	// @combobox
	var plSet = {};	// @button
	var plRemove = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	plFindallButton.click = function plFindallButton_click (event)// @startlock
	{// @endlock
		sources.pLemmaChoice.query();

	};// @lock

	plSearchCombo.change = function plSearchCombo_change (event)// @startlock
	{// @endlock
		var theDic = $$(getHtmlId('plSearchCombo')).getValue();
		sources.plemmaChoice.query('dicname is :1', { params: [theDic]});

	};// @lock

	plSet.click = function plSet_click (event)// @startlock
	{// @endlock
		sources.dictionaryLemma.primarylemma.set(sources.plemmaChoice);

	};// @lock

	plRemove.click = function plRemove_click (event)// @startlock
	{// @endlock
		sources.dictionaryLemma.primarylemma.set(null);

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_plFindallButton", "click", plFindallButton.click, "WAF");
	WAF.addListener(this.id + "_plSearchCombo", "change", plSearchCombo.change, "WAF");
	WAF.addListener(this.id + "_plSet", "click", plSet.click, "WAF");
	WAF.addListener(this.id + "_plRemove", "click", plRemove.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
