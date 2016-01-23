(function ExporterScope() {
    
    var ATTRIBUTE_KEY = 'attribute name';

    WAF.require('Exporter')

    .addFormat('json', 'application/json', {

        /** 
         * @method start
         * @param {string} name The dataClass name
         * @param {number} size The number of expected elements
         * @param {Array} attributes List of attribute names
         * @returns string
         **/
        start: function start(name, size, attributes) {
            return ['{',
                '__entitymodel:', JSON.stringify(name), ',',
                '__attributes:', JSON.stringify(attributes), ',',
                '__COUNT:', JSON.stringify(size), ',',
                '__ENTITIES:', '['
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
            data = {
                __KEY: entity.getKey(),
                __STAMP: entity.getStamp()
            };
            attributes.forEach(function addAttribute(name) {
                data[name] = entity[name].getValue();
            });
            return (first ? '' : ',') + JSON.stringify(data);
        },

        /** 
         * @method stop
         * @returns string
         **/
        stop: function stop() {
            return ']}';
        }

    });

}());