(function(Exporter) {
    "use strict";
    
    function showCsvHeader() {
        if (this.exportFormat() === 'csv') {
            this.csvHeader.show();
        } else {
            this.csvHeader.hide();
        }
    };

    function showServiceUrl() {
        if (this.remote()) {
            this.serviceURL.show();
        } else {
            this.serviceURL.hide();
        }
    };
    
    function autofillAttributes(event) {
        var source, dataclass, attributes;
        source = this.actionSource.boundDatasource();
        if (!source) {
            return;
        }
        dataclass = Designer.env.ds.catalog.getByName(source.datasourceName);
        attributes = [];
        Designer.ds.getAttributesNameFromPath(source.datasourceName).forEach(function (attribute) {
            var kind = dataclass.getAttribute(attribute);
            if (['relatedEntity', 'relatedEntities', 'object', 'blob', 'image'].indexOf(kind) === -1) {
                attributes.push({name: attribute});
            }
        });
        this.exportAttributes(attributes);
    }
    
    Exporter.setWidth(92);
    Exporter.setHeight(22);

    Exporter.addStates('hover', 'active', 'focus', 'disabled');
    Exporter.addEvent('action');

    Exporter.doAfter('init', function() {
        showCsvHeader.call(this);
        this.exportFormat.onChange(showCsvHeader);

        if (this.remote) {
            showServiceUrl.call(this);
            this.remote.onChange(showServiceUrl);
        } else {
            this.serviceURL.hide();
        }
        
        this.actionSource.onChange(autofillAttributes);
        this.subscribe('datasourceBindingChange', 'actionSource', autofillAttributes, this);
        
        // disable click
        $(this.node).off('click', this._handleClick);
    });

    Exporter.customizeProperty('csvHeader', { category: 'Advanced Properties' });
    Exporter.customizeProperty('zipFile', { category: 'Advanced Properties' });
    Exporter.customizeProperty('serviceURL', { category: 'Advanced Properties' });
});