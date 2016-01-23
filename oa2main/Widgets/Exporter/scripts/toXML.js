(function ExporterScope() {

    var EOL = '\n';
    
    WAF.require('Exporter')

    .addFormat('xml', 'text/xml', {

        /** 
         * @method start
         * @param {string} name The dataClass name
         * @param {number} size The number of expected elements
         * @param {Array} attributes List of attribute names
         * @returns string
         **/
        start: function start(name, size, attributes) {
            return [
                '<?xml version="1.0" ?>',  EOL,
                '<result', ' __entitymodel="', name, '"', 
                           ' __attributes="', attributes.join(','), '"', 
                           ' __COUNT="', JSON.stringify(size), '">', EOL
            ].join('');
        },

        /** 
         * @method add
         * @param {Entity} entity The entity data
         * @param {boolean} first Must be true if first element
         * @param {Array} attributes List of attribute names
         * @returns string
         **/
        add: function add(entity, first, attributes) {
            var data;
            data = '<__ENTITIES';
            data += ' __KEY="' + entity.getKey() + '"';
            data += ' __STAMP="' + entity.getStamp() + '"';
            attributes.forEach(function addAttribute(name) {
                data += ' ' + name + '="' + entity[name].getValue() + '"';
            });
            data += ' />' + EOL;
            return data;
        },


        /** 
         * @method stop
         * @returns string
         **/
        stop: function stop() {
            return '</result>';
        }

    });

}());