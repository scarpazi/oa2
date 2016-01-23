(function ExporterScope() {
    "use strict";
    
    var Exporter, formatters, toJSON;
    
    Exporter = WAF.require('Exporter');
    
    Exporter.FORMAT_MIMES = {};
    Exporter.formatters = {};
    
    Exporter.addFormat = function Exporter_addFormat(name, mime, generator) {
        var format;
        
        format = {
            name: name,
            label: name.toUpperCase(),
            generate: generator
        };
        //Exporter.formats[name] = format;
        //Exporter.formats.values[name] = name.toUppercase();
        
        
        Exporter.FORMAT_MIMES[name] = mime;
        Exporter.formatters[name] = generator;    

    };
    
})();


