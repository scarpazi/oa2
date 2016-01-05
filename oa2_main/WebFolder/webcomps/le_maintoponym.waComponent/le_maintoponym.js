
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'le_maintoponym';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var toDialogOk = {};	// @button
	var toDialogCancel = {};	// @button
	var button14 = {};	// @button
	var button13 = {};	// @button
	var textField5 = {};	// @textField
	var checkbox3 = {};	// @checkbox
	var imageButton3 = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	toDialogOk.click = function toDialogOk_click (event)// @startlock
	{// @endlock
		//ok button: sets the selected primary lemma and saves the entity
		sources.dictionaryLemma.save();		
		$$(getHtmlId('toDialog')).closeDialog(); 
	};// @lock

	toDialogCancel.click = function toDialogCancel_click (event)// @startlock
	{// @endlock
		//sources.dictionaryLemma.primarylemma.set(pltemp.primarylemma);
		sources.dictionaryLemma.primarylemma.set(pltemp);
		sources.dictionaryLemma.save();		
		$$(getHtmlId('toDialog')).closeDialog(); //cancel button
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('toDialogComp')).loadComponent({ 
    		path: "/webcomps/diclemmaSetdic.waComponent",
   			userData: { },
   			onSuccess: function () {
				$$(getHtmlId('toDialog')).move(550,210);
				$$(getHtmlId('toDialog')).resize(400,300);		
				$$(getHtmlId('toDialogOk')).setRight(30);
				$$(getHtmlId('toDialogOk')).setWidth(80);
				$$(getHtmlId('toDialogCancel')).setRight(120);
				$$(getHtmlId('toDialogCancel')).setWidth(80);
				//$$(getHtmlId('toDialogTitle')).setValue("Set dictionary");

				pltemp = sources.primarylemma.getCurrentElement();

				$$(getHtmlId('toDialog')).displayDialog();
       		}
		});
	};// @lock

	button13.click = function button13_click (event)// @startlock
	{// @endlock
			$$(getHtmlId('toDialogComp')).loadComponent({ 
    			path: "/webcomps/diclemmaSetpl.waComponent",
    			userData: { },
    			onSuccess: function () {
					$$(getHtmlId('toDialog')).move(550,210);
					$$(getHtmlId('toDialog')).resize(400,300);		
					$$(getHtmlId('toDialogOk')).setRight(30);
					$$(getHtmlId('toDialogOk')).setWidth(80);
					$$(getHtmlId('toDialogCancel')).setRight(120);
					$$(getHtmlId('toDialogCancel')).setWidth(80);
					$$(getHtmlId('toDialogTitle')).setValue("Set related toponym");

					var pltemp = sources.primarylemma.getCurrentElement();

					$$(getHtmlId('toDialog')).displayDialog();
       		}
		});
	};// @lock

	textField5.keyup = function textField5_keyup (event)// @startlock
	{// @endlock
		dicSearchfn();
	};// @lock

	checkbox3.change = function checkbox3_change (event)// @startlock
	{// @endlock
		dicSearchfn();
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		lFindall();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_toDialogOk", "click", toDialogOk.click, "WAF");
	WAF.addListener(this.id + "_toDialogCancel", "click", toDialogCancel.click, "WAF");
	WAF.addListener(this.id + "_button14", "click", button14.click, "WAF");
	WAF.addListener(this.id + "_button13", "click", button13.click, "WAF");
	WAF.addListener(this.id + "_textField5", "keyup", textField5.keyup, "WAF");
	WAF.addListener(this.id + "_checkbox3", "change", checkbox3.change, "WAF");
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
