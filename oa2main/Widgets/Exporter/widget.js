WAF.define('Exporter', ['waf-core/widget'], function Exporter(Widget) {
    "use strict";
    
    var Exporter = Widget.create('Exporter', {
        tagName: 'button',
        title: Widget.property({
            type: 'string',
            defaultValue: 'Export',
            bindable: true
        }),
        actionSource: Widget.property({
            type: 'datasource'
        }),
        fileName: Widget.property({
            type: 'string',
            defaultValue: '',
            bindable: true
        }),
        exportFormat: Widget.property({
            type: 'enum',
            values: {
                'json': 'JSON',
                'xml':  'XML',
                'csv':  'CSV',
                'sql':  'SQL'
            },
            defaultValue: 'JSON',
            bindable: true
        }),
        exportAttributes: Widget.property({
			type: 'list',
			attributes: [{name: 'name', datasourceProperty: 'actionSource'}]
		}),	
        csvHeader: Widget.property({
            type: 'boolean',
            defaultValue: true,
            bindable: false
        }),
        /*
        remote: Widget.property({
            type: 'boolean',
            defaultValue: false,
            bindable: false
        }),
        */
        zipFile: Widget.property({
            type: 'boolean',
            defaultValue: false,
            bindable: false
        }),
        serviceURL: Widget.property({
            type: 'string',
            defaultValue: '/nosql-export/',
            bindable: false
        }),
        render: function render() {
            this.node.innerHTML = this.title();
        },
        init: function init() {
            this.render();
            this.title.onChange(this.render);
            
            $(this.node).on('click', (function exportAction(event) {
                this.fire('action');
                this.exports();
                event.stopPropagation();
            }).bind(this));
        }
    });

    Exporter.inherit(WAF.require('waf-behavior/focus'));


    return Exporter;
});
