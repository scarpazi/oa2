(function ExporterScope() {
    
    var 
        Exporter = WAF.require('Exporter');
    
    function download(content, mime, filename) {
        var linkTag;
        
        mime = mime || 'application/octet-stream';
        if (mime.indexOf('base64') === -1) {
            content = encodeURIComponent(content);
        }
        linkTag = document.createElement('a');
        linkTag.setAttribute('href', 'data:' + mime + ',' + content);
        linkTag.setAttribute('type', mime);
        if (filename) {
            linkTag.setAttribute('download', filename);
        }
        linkTag.click();
    }

    function serverExport(collection, attributes, format, service) {
        var mime, query, url, linkTag;

        mime = Exporter.FORMAT_MIMES[format];
        query = collection.getReference().savedQuery;
        url = service + collection.getDataClass().getName() + '.' + format;
        url += '?$query=' + query;

        linkTag = document.createElement('A');
        linkTag.setAttribute('href', url);
        linkTag.setAttribute('type', mime);
        linkTag.setAttribute('target', '_blank');
        linkTag.click();
    }
    
    function clientExport(collection, attributes, format, options) {
        var formatter, first, data;
        format = format.toLowerCase();
        formatter = Exporter.formatters[format];
        data = formatter.start(
            collection.getDataClass().getName(), 
            collection.length,
            attributes,
            options.csvHeader
        );
        first = true;
        collection.forEach(function (event) {
            data += formatter.add(event.result, first, attributes);
            first = false;
        });
        data += formatter.stop();
        return data;
    }
    
    Exporter.prototype.exports = function exportsData(format, remote, service) {
        var collection, attributes, options, data, fileName, zip;
        collection = this.actionSource().getEntityCollection();
        attributes = this.exportAttributes().map(function (attr) { 
            return attr.name;
        });
        format = format || this.exportFormat();
        options = {
            csvHeader: this.csvHeader()
        };
        remote = remote || this.remote && this.remote();
        if (remote) {
            service = service || this.serviceURL();
            data = serverExport(collection, attributes, format, service, options);
        } else {
            data = clientExport(collection, attributes, format, options);
        }
        fileName = this.fileName() ||' exports';
        ext = '.' + format.toLowerCase();
        if (this.zipFile()) {
            zip = new JSZip();
            zip.file(fileName + ext, data);
            data = zip.generate({type: 'base64'});
            download(
                data, 
                'application/zip;base64', 
                fileName + '.zip'
            );
        } else {
            download(
                data, 
                Exporter.FORMAT_MIMES[format] + ';charset=utf-8', 
                fileName + ext
            );
        }
    }
    
})();
