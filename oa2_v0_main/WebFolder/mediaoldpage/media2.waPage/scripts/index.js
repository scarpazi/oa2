
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var addNewImgentity = {};	// @button
	var save_Entry = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	addNewImgentity.click = function addNewImgentity_click (event)// @startlock
	{// @endlock
		waf.sources.fileImage.newEntity();
		waf.sources.fileImage.serverRefresh({
			onSucces: function (event) {
				$$('textField2').focus;
				}
			});
	};// @lock

	save_Entry.click = function save_Entry_click (event)// @startlock
	{// @endlock
		waf.sources.fileImages.save({
		onSuccess: function(event){ //  save the current entity
        if (waf.sources.fileImages.getPosition() ==-1 {
            waf.sources.FileImages.addEntity(waf.sources.fileImages.getCurrentElement()); 
        		}
        	} 
        });
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("addNewImgentity", "click", addNewImgentity.click, "WAF");
	WAF.addListener("save_Entry", "click", save_Entry.click, "WAF");
// @endregion
};// @endlock
