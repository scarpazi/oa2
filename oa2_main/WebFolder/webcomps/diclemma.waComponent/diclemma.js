
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'diclemma';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	// @region namespaceDeclaration// @startlock
	var dicSearchEvent = {};	// @dataSource
	var lSearchTextfield = {};	// @textField
	var plSearchCheckbox = {};	// @checkbox
	var lFindallButton = {};	// @buttonImage
	var dicedit = {};	// @button
	var dlDialogOk = {};	// @button
	var dlDialogCancel = {};	// @button
	var plemmaedit = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	//load flag to find all lemmas on load page (DOES NOT WORK)
	var loadFlag = data.userData.loadFlag;
	
	
//+++ dictionaryLemma SearchBox functions +++
	function lFindall ()
	{
        $$('diclemmaComponent_lSearchTextfield').setValue("");
        $$('diclemmaComponent_plSearchCheckbox').setValue(false);
		sources.dictionaryLemma.all();
	};


	function dicSearchfn ()
	{
		var theDic = $$(getHtmlId('dicSearchCombo')).getValue();
		var theLemma = $$(getHtmlId('lSearchTextfield')).getValue();
		//alert('dicQuery, theDic='+theDic+'     theLemma='+theLemma);
		
		//build query string: dictionary Filter
		var lqueryStr = '(dicname is ' + theDic + ')';
		
		//build query string: lemma filter
		if (theLemma != "") {
	        //alert('if theLemma != vuoto');
	        lqueryStr =  lqueryStr + ' && (lvalue == ' + theLemma + '*)';
		}
		
		//build query string: primary lemma Filter
		if ($$(getHtmlId('plSearchCheckbox')).getValue()) {
	        //alert('if plSearchCheckbox is true');
	        lqueryStr =  lqueryStr + ' && (primarylemma is null)';
	    }

        //alert(lqueryStr);
		sources.dictionaryLemma.query(lqueryStr, {
        	onSuccess: function(){
        		//alert('query success');
			}
		});

	};



	//+++ UI events +++
	dicSearchEvent.onCurrentElementChange = function dicSearchEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if (!loadFlag) {
			if (($$(getHtmlId('dicSearchCombo')).getValue()) !== null) {
				dicSearchfn();
			}
		} else {
				loadFlag = false;
				lFindall();
		}
	};// @lock

	lSearchTextfield.keyup = function lSearchTextfield_keyup (event)// @startlock
	{// @endlock
		dicSearchfn();
	};// @lock

	plSearchCheckbox.change = function plSearchCheckbox_change (event)// @startlock
	{// @endlock
		dicSearchfn();
	};// @lock

	lFindallButton.click = function lFindallButton_click (event)// @startlock
	{// @endlock
		lFindall();
	};// @lock

	dicedit.click = function dicedit_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('dlDialogComp')).loadComponent({ 
    		path: "/webcomps/diclemmaSetdic.waComponent",
   			userData: { },
   			onSuccess: function () {
				$$(getHtmlId('dlDialog')).move(550,210);
				$$(getHtmlId('dlDialog')).resize(400,300);		
				$$(getHtmlId('dlDialogOk')).setRight(30);
				$$(getHtmlId('dlDialogOk')).setWidth(80);
				$$(getHtmlId('dlDialogCancel')).setRight(120);
				$$(getHtmlId('dlDialogCancel')).setWidth(80);
				//$$(getHtmlId('dlDialogTitle')).setValue("Set dictionary");

				pltemp = sources.primarylemma.getCurrentElement();

				$$(getHtmlId('dlDialog')).displayDialog();
       		}
		});
	};// @lock

	dlDialogOk.click = function dlDialogOk_click (event)// @startlock
	{// @endlock
		//ok button: sets the selected primary lemma and saves the entity
		sources.dictionaryLemma.save();		
		$$(getHtmlId('dlDialog')).closeDialog(); 
	};// @lock

	dlDialogCancel.click = function dlDialogCancel_click (event)// @startlock
	{// @endlock
		//sources.dictionaryLemma.primarylemma.set(pltemp.primarylemma);
		sources.dictionaryLemma.primarylemma.set(pltemp);
		sources.dictionaryLemma.save();		
		$$(getHtmlId('dlDialog')).closeDialog(); //cancel button
	};// @lock

	plemmaedit.click = function plemmaedit_click (event)// @startlock
	{// @endlock
			$$(getHtmlId('dlDialogComp')).loadComponent({ 
    			path: "/webcomps/diclemmaSetpl.waComponent",
    			userData: { },
    			onSuccess: function () {
					$$(getHtmlId('dlDialog')).move(550,210);
					$$(getHtmlId('dlDialog')).resize(400,300);		
					$$(getHtmlId('dlDialogOk')).setRight(30);
					$$(getHtmlId('dlDialogOk')).setWidth(80);
					$$(getHtmlId('dlDialogCancel')).setRight(120);
					$$(getHtmlId('dlDialogCancel')).setWidth(80);
					$$(getHtmlId('dlDialogTitle')).setValue("Set primary lemma");

					var pltemp = sources.primarylemma.getCurrentElement();

					$$(getHtmlId('dlDialog')).displayDialog();
       		}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dicSearch", "onCurrentElementChange", dicSearchEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_lSearchTextfield", "keyup", lSearchTextfield.keyup, "WAF");
	WAF.addListener(this.id + "_plSearchCheckbox", "change", plSearchCheckbox.change, "WAF");
	WAF.addListener(this.id + "_lFindallButton", "click", lFindallButton.click, "WAF");
	WAF.addListener(this.id + "_dicedit", "click", dicedit.click, "WAF");
	WAF.addListener(this.id + "_dlDialogOk", "click", dlDialogOk.click, "WAF");
	WAF.addListener(this.id + "_dlDialogCancel", "click", dlDialogCancel.click, "WAF");
	WAF.addListener(this.id + "_plemmaedit", "click", plemmaedit.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
