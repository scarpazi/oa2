
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var fileUpload2 = {};	// @fileUpload
	var button4 = {};	// @button
	var button11 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		sources.graphicElement.query('imgName = :1 order by imgName', {params : [queryStr + '*']});
	};// @lock

	fileUpload2.filesUploaded = function fileUpload2_filesUploaded (event)// @startlock
	{// @endlock
		waf.sources.graphicElement.serverRefresh()
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		// create new graphic element entity
		waf.sources.graphicElement.addNewElement()
		//run init on server
		waf.sources.graphicElement.serverRefresh({
			onSuccess: function (event) {
				$$('textField2').focus();
			}
		});				
	};// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		waf.sources.graphicElement.save({
			onSucces: function (event) {
				if (waf.sources.graphiElement.getPosition() == -1){
					waf.sources.graphicElement.addEntity(waf.soruces.graphicElement.getCurrentEleme());
					}
				}
			});				
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("fileUpload2", "filesUploaded", fileUpload2.filesUploaded, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button11", "click", button11.click, "WAF");
// @endregion
};// @endlock
