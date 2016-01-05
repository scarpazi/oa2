
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'aDictlemma';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var d3bremove = {};	// @button
	var d3bok = {};	// @button
	var d3bcancel = {};	// @button
	var plemmaedit = {};	// @button
	var twobremove = {};	// @button
	var twobok = {};	// @button
	var twobcancel = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	d3bremove.click = function d3bremove_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	d3bok.click = function d3bok_click (event)// @startlock
	{// @endlock
		//ok button: sets the selected primary lemma and saves the entity
		sources.dictionaryLemma.primarylemma.set(sources.plemmaChoice);
		sources.dictionaryLemma.save();
		
		$$('dictLemmaComponent_d3b').closeDialog(); 
	};// @lock

	d3bcancel.click = function d3bcancel_click (event)// @startlock
	{// @endlock
		$$('dictLemmaComponent_d3b').closeDialog(); //cancel button
	};// @lock

	plemmaedit.click = function plemmaedit_click (event)// @startlock
	{// @endlock
		$$('dictLemmaComponent_d3b').move(350,150);
		$$('dictLemmaComponent_d3bok').setRight(30);
		$$('dictLemmaComponent_d3bok').setWidth(80);
		$$('dictLemmaComponent_d3bcancel').setRight(200);
		$$('dictLemmaComponent_d3bcancel').setWidth(80);
		
		$$('dictLemmaComponent_d3b').displayDialog();

		//*using CSS (now deprecated)*
		//$$('dictLemmaComponent_d3b').addClass('plemmas_edit');
		//sources.plemmaChoice.refresh();

		//$$('dictLemmaComponent_d3b_comp').loadComponent({ 
    	//	path: "/webcomps/le_def.waComponent",
    	//	userData: { dialogtitle: "Specific data"},
    	//	onSuccess: function () {
                //do something here;
       	//	}
		//});
	};// @lock

	twobremove.click = function twobremove_click (event)// @startlock
	{// @endlock
		sources.dictionaryLemma.primarylemma.set(null);
		sources.dictionaryLemma.save();
		
		$$('dictLemmaComponent_d3b').closeDialog(); 
	};// @lock

	twobok.click = function twobok_click (event)// @startlock
	{// @endlock
		//ok button: sets the selected primary lemma and saves the entity
		//sources.dictionaryLemma.primarylemma.set($$('dictLemmaComponent_combobox1').getValue());
		//alert(sources.dictionaryLemma.primarylemma.value);
		sources.dictionaryLemma.primarylemma.set(sources.plemmaChoice);
		sources.dictionaryLemma.save();
		$$('dictLemmaComponent_d3b').closeDialog(); 
	};// @lock

	twobcancel.click = function twobcancel_click (event)// @startlock
	{// @endlock
		$$('dictLemmaComponent_d3b').closeDialog(); //cancel button
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_d3bremove", "click", d3bremove.click, "WAF");
	WAF.addListener(this.id + "_d3bok", "click", d3bok.click, "WAF");
	WAF.addListener(this.id + "_d3bcancel", "click", d3bcancel.click, "WAF");
	WAF.addListener(this.id + "_plemmaedit", "click", plemmaedit.click, "WAF");
	WAF.addListener(this.id + "_twobremove", "click", twobremove.click, "WAF");
	WAF.addListener(this.id + "_twobok", "click", twobok.click, "WAF");
	WAF.addListener(this.id + "_twobcancel", "click", twobcancel.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
