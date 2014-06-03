
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'graphicelement';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var fileUpload2 = {};	// @fileUpload
	var button24 = {};	// @button
	var button18 = {};	// @button
	var button17 = {};	// @button
	var button8 = {};	// @button
	var queryStrEvent = {};	// @dataSource
	var textquery1 = {};	// @textField
	var button16 = {};	// @button
	var button5 = {};	// @button
	var fileUpload1 = {};	// @fileUpload
	var container9 = {};	// @container
	var button12 = {};	// @button
	var dataGrid2 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	fileUpload2.filesUploaded = function fileUpload2_filesUploaded (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(2)
	};// @lock

	button24.click = function button24_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(4)
	};// @lock

	button18.click = function button18_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(4)
	};// @lock

	button17.click = function button17_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(5);
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(3)
	};// @lock

	queryStrEvent.onAttributeChange = function queryStrEvent_onAttributeChange (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	textquery1.keyup = function textquery1_keyup (event)// @startlock
	{// @endlock
		var theName = $$(getHtmlId('textquery1')).getValue();
		$comp.sources.graphicElement.query('imgName = :1 order by imgName', { params: [theName +"*"]});
	};// @lock

	button16.click = function button16_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView2')).selectTab(1);
	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		waf.sources.graphicElement.save({
			onSucces: function (event) {
				if (waf.sources.graphicElement.getPosition() == -1){
					waf.sources.graphicElement.addEntity(waf.sources.graphicElement.getCurrentEleme());
					}
				}
			});		
	};// @lock

	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
		$comp.sources.graphicElement.serverRefresh()
	};// @lock

	container9.click = function container9_click (event)// @startlock
	{// @endlock
							
	};// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(1);
	};// @lock

	dataGrid2.onRowDblClick = function dataGrid2_onRowDblClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('tabView1')).selectTab(2);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_fileUpload2", "filesUploaded", fileUpload2.filesUploaded, "WAF");
	WAF.addListener(this.id + "_button24", "click", button24.click, "WAF");
	WAF.addListener(this.id + "_button18", "click", button18.click, "WAF");
	WAF.addListener(this.id + "_button17", "click", button17.click, "WAF");
	WAF.addListener(this.id + "_button8", "click", button8.click, "WAF");
	WAF.addListener(this.id + "_queryStr", "onAttributeChange", queryStrEvent.onAttributeChange, "WAF");
	WAF.addListener(this.id + "_textquery1", "keyup", textquery1.keyup, "WAF");
	WAF.addListener(this.id + "_button16", "click", button16.click, "WAF");
	WAF.addListener(this.id + "_button5", "click", button5.click, "WAF");
	WAF.addListener(this.id + "_fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
	WAF.addListener(this.id + "_container9", "click", container9.click, "WAF");
	WAF.addListener(this.id + "_button12", "click", button12.click, "WAF");
	WAF.addListener(this.id + "_dataGrid2", "onRowDblClick", dataGrid2.onRowDblClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
