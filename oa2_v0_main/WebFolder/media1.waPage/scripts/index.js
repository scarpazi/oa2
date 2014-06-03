
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var addnewelimg = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	addnewelimg.click = function addnewelimg_click (event)// @startlock
	{// @endlock
		waf.sources.image.addNewElement();


waf.sources.images.serverRefresh({
onSuccess:function (event) {
$$ ('textfield2').focus();
}
});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("addnewelimg", "click", addnewelimg.click, "WAF");
// @endregion
};// @endlock
