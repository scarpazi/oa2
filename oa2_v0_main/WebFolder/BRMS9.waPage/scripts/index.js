
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button9 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
   $('richText1').show();


	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		if ($bibliographic_reference.Journal && $bibliographic_reference.volume)
            { $$(getHtmlId('autoForm3')).hide();
              $$(getHtmlId('autoForm8')).hide();
              $$(getHtmlId('autoForm7')).show();}
        else
        if ($bibliographic_reference.Journal)
			{ $$(getHtmlId('autoForm7')).hide();
              $$(getHtmlId('autoForm8')).hide();
              $$(getHtmlId('autoForm3')).show();};

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
// @endregion
};// @endlock
