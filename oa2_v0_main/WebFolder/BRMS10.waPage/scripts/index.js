
WAF.onAfterInit = function onAfterInit() {// @lock
	{
		if (sources.bibliographic_reference.volume)
            {
                $$('autoForm3').show();
                $$('autoForm7').hide();
                $$('autoForm8').hide();
            }
        else if (sources.bibliographic_reference.Journal)
            {
                $$('autoForm7').show();
                $$('autoForm3').hide();
                $$('autoForm8').hide();
            }
        else if (sources.bibliographic_reference.Miscellaneous)
            {
                $$('autoForm8').show();
                $$('autoForm3').hide();
                $$('autoForm7').hide();
            }

	};



// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button8 = {};	// @button
	var button5 = {};	// @button
	var button10 = {};	// @button
	var button9 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		
	if (sources.bibliographic_reference.First_Name == "")
		 { 
		 
		  $$('richText3').toggle();
		  $$('richText2').toggle();
          $$('richText1').hide();
          }
          
          else if (sources.bibliographic_reference.First_Name !== "")
          {
          	$$('richText1').toggle();
		  $$('richText2').toggle();
          $$('richText3').hide();
          
          }
          
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		
		if (sources.bibliographic_reference.volume)
            {
                $$('autoForm3').show();
                $$('autoForm7').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Journal)
            {
                $$('autoForm7').show();
                $$('autoForm3').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Miscellaneous)
            {
                $$('autoForm8').show();
                $$('autoForm3').hide();
                $$('autoForm7').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }


	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		
		if (sources.bibliographic_reference.volume)
            {
                $$('autoForm3').show();
                $$('autoForm7').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Journal)
            {
                $$('autoForm7').show();
                $$('autoForm3').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Miscellaneous)
            {
                $$('autoForm8').show();
                $$('autoForm3').hide();
                $$('autoForm7').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }


	};// @lock

	button10.click = function button10_click (event)// @startlock
	{// @endlock
		if (sources.bibliographic_reference.volume)
            {
                $$('autoForm3').show();
                $$('autoForm7').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Journal)
            {
                $$('autoForm7').show();
                $$('autoForm3').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Miscellaneous)
            {
                $$('autoForm8').show();
                $$('autoForm3').hide();
                $$('autoForm7').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }

	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		if (sources.bibliographic_reference.volume)
            {
                $$('autoForm3').show();
                $$('autoForm7').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
                
            }
        else if (sources.bibliographic_reference.Journal)
            {
                $$('autoForm7').show();
                $$('autoForm3').hide();
                $$('autoForm8').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
        else if (sources.bibliographic_reference.Miscellaneous)
            {
                $$('autoForm8').show();
                $$('autoForm3').hide();
                $$('autoForm7').hide();
                $$('richText1').hide();
                $$('richText2').hide();
                $$('richText3').hide();
            }
         
         
	
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		   $('#autoForm1').show();

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button10", "click", button10.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
