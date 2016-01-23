(function ExporterScope() {

    var EOL = '\n';
    
    WAF.require('Exporter')

    .addFormat('sql', 'application/sql', {

        /** 
         * @method start
         * @param {string} name The dataClass name
         * @param {number} size The number of expected elements
         * @param {Array} attributes List of attribute names
         * @returns string
         **/
        start: function start(name, size, attributes) {
            return 'INSERT INTO [' + name + ']  (' + attributes.join(', ') + ') VALUES' ;
        },

        /** 
         * @method add
         * @param {Entity} entity The entity data
         * @param {boolean} first Must be true if first element
         * @param {Array} attributes List of attribute names
         * @returns string
         **/
        add: function add(entity, first, attributes, table) {
            var data;
            data = (first ? '' : ',') + EOL;
            data += '(' +  attributes.map(function addAttribute(name) {
                var value;

                value = entity[name].getValue();

                return (typeof value === 'string') ? ("'" + value + "'") : value;
                
            }).join(', ') + ')';
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