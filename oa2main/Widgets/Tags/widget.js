// https://github.com/xoxco/jQuery-Tags-Input

WAF.define('Tags', ['waf-core/widget'], function(widget) {

	var Widget = widget.create('Tags', {
		interactive: widget.property({
			type: 'boolean',
			defaultValue: true,
			bindable: false
		}),

		defaultText: widget.property({
			defaultValue: 'Add a tag',
			bindable: false,
			description: 'Default text'
		}),

		value: widget.property({
			defaultValue: ''
		}),

		removeWithBackspace: widget.property({
			defaultValue: true,
			bindable: false,
			type: 'boolean',
			description: 'Remove with backspace'
		}),

		minChars: widget.property({
			defaultValue: 0,
			bindable: false,
			type: 'integer',
			description: 'Min characters'
		}),

		maxChars: widget.property({
			defaultValue: 0,
			bindable: false,
			type: 'integer',
			description: 'Max characters'
		}),

		placeholderColor: widget.property({
			defaultValue: '#666666',
			bindable: false,
			type: 'string',
			description: 'Placeholder color'
		}),

		init: function() {
			this.node.innerHTML = '<input>';
			this.input = this.node.getElementsByTagName('input')[0];

			var options = {
				height				: this.height() + 'px',
				width				: this.width() + 'px',
				minChars			: this.minChars(),
				interactive			: this.interactive(),
				defaultText			: this.defaultText(),
				placeholderColor	: this.placeholderColor(),
				removeWithBackspace	: this.removeWithBackspace()
			};
			var that = this;


			// var map = [
			// 	{name: 'add', event: 'onAddTag'},
			// 	{name: 'remove', event: 'onRemoveTag'}
			// ];
			// var that = this;

			// map.forEach(function (el, i, array) {
			// 	options[el.event] = function (arg0) {
			// 		this.fire(el.name, {value:arg0});
			// 	}.bind(that);
			// });
			
			var subscriber = this.value.onChange( function(value) { 
    			//this.render(); 
    			this.import(this.value());
    		});

			options.onAddTag = function (arg) {
				that.fire('add', {value:arg});
				subscriber.pause();
				that.value($(that.input).val());
				subscriber.resume();
			};

			options.onRemoveTag = function (arg) {
				that.fire('remove', {value:arg});
				subscriber.pause();				
				that.value($(that.input).val());
				subscriber.resume();
			};

			options.onChange = function (arg) {
				subscriber.pause();
				that.value($(that.input).val());
				subscriber.resume();
			};

			if(this.maxChars() > 0){
				options.maxChars = this.maxChars();
			}

			$(this.input).tagsInput(options);

			this.import(this.value());
			

    			
		},

		add: function (value) {
			$(this.input).addTag(value);
		},

		remove: function (value) {
			$(this.input).removeTag(value);
		},

		import: function (value) {
			if(Array.isArray(value)){
				value = value.join(',');
			}

			$(this.input).importTags(value || '' );
		}
	});

	return Widget;

});