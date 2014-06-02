
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'toponym-manager';
	// @endregion// @endlock

	this.tCondUI = function(){
 	   //change something in the component
		if ($comp.sources.toponym.administrative && $comp.sources.toponym.historical)
			{ $$(getHtmlId('tadmtab')).hide();
			  $$(getHtmlId('tgentab')).hide();
			  $$(getHtmlId('thisttab')).hide();
			  $$(getHtmlId('terrtab')).show();}
		else
			if ($comp.sources.toponym.administrative)		
				{ $$(getHtmlId('tadmtab')).show();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			else if ($comp.sources.toponym.historical)
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).show();
				  $$(getHtmlId('terrtab')).hide();}
			else
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).show();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
		}
 

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var tgrid = {};	// @dataGrid
	var tlast = {};	// @buttonImage
	var tnnext = {};	// @buttonImage
	var tfirst = {};	// @buttonImage
	var tprev = {};	// @buttonImage
	var tnext = {};	// @buttonImage
	var tfilter = {};	// @textField
	// @endregion// @endlock

	//on load: check toponym type and adjust UI
	if ($comp.sources.toponym.administrative)		
			{ $$(getHtmlId('tadmtab')).show();
			  $$(getHtmlId('tgentab')).hide();
			  $$(getHtmlId('thisttab')).hide();
			  $$(getHtmlId('terrtab')).hide();}
	else if ($comp.sources.toponym.historical)
			{ $$(getHtmlId('tadmtab')).hide();
			  $$(getHtmlId('tgentab')).hide();
			  $$(getHtmlId('thisttab')).show();
			  $$(getHtmlId('terrtab')).hide();}
		else
			{ $$(getHtmlId('tadmtab')).hide();
			  $$(getHtmlId('tgentab')).show();
			  $$(getHtmlId('thisttab')).hide();
			  $$(getHtmlId('terrtab')).hide();}

	// eventHandlers// @lock

	tgrid.onRowClick = function tgrid_onRowClick (event)// @startlock
	{// @endlock
			if ($comp.sources.toponym.administrative)		
				{ $$(getHtmlId('tadmtab')).show();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			else if ($comp.sources.toponym.historical)
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).show();
				  $$(getHtmlId('terrtab')).hide();}
			else
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).show();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
	};// @lock

	tlast.click = function tlast_click (event)// @startlock
	{// @endlock
		if ($comp.sources.toponym.administrative)		
				{ $$(getHtmlId('tadmtab')).show();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			else if ($comp.sources.toponym.historical)
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).show();
				  $$(getHtmlId('terrtab')).hide();}
			else
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).show();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
	};// @lock

	tnnext.click = function tnnext_click (event)// @startlock
	{// @endlock
		$$('toponym-manager').tCondUI
	};// @lock

	tfirst.click = function tfirst_click (event)// @startlock
	{// @endlock
		if ($comp.sources.toponym.administrative && $comp.sources.toponym.historical)
			{ $$(getHtmlId('tadmtab')).hide();
			  $$(getHtmlId('tgentab')).hide();
			  $$(getHtmlId('thisttab')).hide();
			  $$(getHtmlId('terrtab')).show();}
		else
			if ($comp.sources.toponym.administrative)		
				{ $$(getHtmlId('tadmtab')).show();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			else if ($comp.sources.toponym.historical)
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).show();
				  $$(getHtmlId('terrtab')).hide();}
			else
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).show();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}

	};// @lock

	tprev.click = function tprev_click (event)// @startlock
	{// @endlock
		if ($comp.sources.toponym.administrative && $comp.sources.toponym.historical)
			{ $$(getHtmlId('tadmtab')).hide();
			  $$(getHtmlId('tgentab')).hide();
			  $$(getHtmlId('thisttab')).hide();
			  $$(getHtmlId('terrtab')).show();}
		else
			if ($comp.sources.toponym.administrative)		
				{ $$(getHtmlId('tadmtab')).show();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			else if ($comp.sources.toponym.historical)
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).show();
				  $$(getHtmlId('terrtab')).hide();}
			else
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).show();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}

	};// @lock

	tnext.click = function tnext_click (event)// @startlock
	{// @endlock
			if ($comp.sources.toponym.administrative)		
				{ $$(getHtmlId('tadmtab')).show();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			else if ($comp.sources.toponym.historical)
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).hide();
				  $$(getHtmlId('thisttab')).show();
				  $$(getHtmlId('terrtab')).hide();}
			else
				{ $$(getHtmlId('tadmtab')).hide();
				  $$(getHtmlId('tgentab')).show();
				  $$(getHtmlId('thisttab')).hide();
				  $$(getHtmlId('terrtab')).hide();}
			//this.tCondUI();
	};// @lock

	tfilter.keyup = function tfilter_keyup (event)// @startlock
	{// @endlock
		//WAF.sources.component0_toponym.query("name = :1", event.currentTarget.value + "@");
		var theName = $$(getHtmlId('tfilter')).getValue();
		$comp.sources.toponym.query('name = :1 order by name', { params: [theName + "*"]});

	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_tgrid", "onRowClick", tgrid.onRowClick, "WAF");
	WAF.addListener(this.id + "_tlast", "click", tlast.click, "WAF");
	WAF.addListener(this.id + "_tnnext", "click", tnnext.click, "WAF");
	WAF.addListener(this.id + "_tfirst", "click", tfirst.click, "WAF");
	WAF.addListener(this.id + "_tprev", "click", tprev.click, "WAF");
	WAF.addListener(this.id + "_tnext", "click", tnext.click, "WAF");
	WAF.addListener(this.id + "_tfilter", "keyup", tfilter.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
