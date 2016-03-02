WAF.define('wakandaratings', function() {
	"use strict";
	var widget = WAF.require('waf-core/widget');
	var wakandaratings = widget.create('wakandaratings');
	
	wakandaratings.addProperty('value', { defaultValue : 2,  type : "number"});
	
	wakandaratings.addProperty('max', { defaultValue : 5,  type : "number", bindable : false});
	
	wakandaratings.addProperty('step', { defaultValue : 1,  type : "number", bindable : false});
	
	wakandaratings.addProperty('resetable', { defaultValue: true, type : "boolean", bindable : false});
	
	wakandaratings.addProperty('readOnly', { defaultValue: false, type : "boolean", bindable : false});
	
	
	wakandaratings.prototype.init = function () { 
	
		 var that = this,
			$htmlElement, $rateIt;
		
		
		$('#' + this.id).bind('rated', function(event) {
		 	that.value($rateIt.rateit('value'));
		});
		
		$('#' + this.id).bind('reset', function(event) {
			that.value(0);
		});
		
		$htmlElement = $("#" + this.id);
		$htmlElement.html('<span class="rateit"> </span>');
		
		$rateIt = $htmlElement.find('.rateit');
		$rateIt.rateit();
		
		$rateIt.rateit('max', this.max());
		this.max.onChange(function() {
			$rateIt.rateit('max', this.max());
		});
		
		$rateIt.rateit('step', this.step() || 1);
		this.step.onChange(function() {
			$rateIt.rateit('step', this.step() || 1);
		});
		
		$rateIt.rateit('resetable', this.resetable());
		this.resetable.onChange(function() {
			$rateIt.rateit('resetable', this.resetable());
		});
		
		$rateIt.rateit('readonly', this.readOnly());
		this.readOnly.onChange(function() {
			$rateIt.rateit('readonly', this.readOnly());
		});
		
		$rateIt.rateit('value', this.value() || 0);
		this.value.onChange(function (myValue) {
			$rateIt.rateit('value', myValue || 0);
		});
	};
	 
	return wakandaratings;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
