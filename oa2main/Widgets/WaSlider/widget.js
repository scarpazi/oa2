WAF.define('WaSlider', ['waf-core/widget'], function(widget) {

    var SliderWidget = widget.create('WaSlider', {
        tagName: 'input',

        /* Properties */
        value: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        min: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        max: widget.property({
            type: 'number',
            defaultValue: 100
        }),
        step: widget.property({
            type: 'number',
            defaultValue: 1,
        }),

        init: function() {
            
            this.render();
            var $node = $(this.node);
            
            $node.on('change', function() {
                var value = $node.val();
                this.value(value);
            }.bind(this));
                  
            this.value.onChange(function(){
                  $node.val(this.value());    
            });
            this.min.onChange(function(){
                  $node.attr('min', this.min()); 
            });
            this.max.onChange(function(){
                  $node.attr('max', this.max()); 
            });
            this.step.onChange(function(){
                  $node.attr('step', this.step()); 
            });
        },
        
        render: function(){
            var $node = $(this.node);
            this.node.type = 'range';
            
            $node.val(this.value());
            $node.attr("min",this.min());
            $node.attr("max",this.max());
            $node.attr("step",this.step());
        }
        
    });


    return SliderWidget;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */
