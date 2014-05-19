
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var button2 = {};	// @button
	var button9 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		   $('#autoForm1').show();

	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
   $('#richText1').toggle();
   $('#richText2').toggle();


	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		if ($bibliographic_reference.Journal && $bibliographic_reference.volume)
            { $$('#autoForm3')).hide();
              $$('#autoForm8')).hide();
              $$('#autoForm7')).show();}
        else
        if ($bibliographic_reference.Journal)
			{ $$('#autoForm7')).hide();
              $$('#autoForm8')).hide();
              $$('#autoForm3')).show();};

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
// @endregion
};// @endlock
