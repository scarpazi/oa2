(function ExporterScope() {
    
    var EOL = '\n';

    WAF.require('Exporter')

    .addFormat('csv', 'text/csv', {

        /** 
         * @method start
         * @param {string} name The dataClass name
         * @param {number} size The number of expected elements
         * @param {Array} attributes List of attribute names
         * @param {boolean} header CSV header flag
         * @returns string
         **/
        start: function start(name, size, attributes, header) {
            var data;
            data = '';
            if (header) {
                data += attributes.map(function addHeaderItem(name) {
                    return '"' + name + '"'
                }).join(',') + EOL;
            }
            return data;
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
            data = attributes.map(function addAttribute(name) {
                return '"' + entity[name].getValue() + '"';
            }).join(',') + EOL;
            return data;
        },


        /** 
         * @method stop
         * @returns string
         **/
        stop: function stop() {
            return '';
        }

    });

}());