/*global WAF, $, L */
'use strict';

WAF.define('Leaflet', ['waf-core/widget'], function(widget) {

    var Leaflet = widget.create('Leaflet', {

        // Properties
        zoom: widget.property({
            type: 'number',
            defaultValue: 10
        }),
        lat: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        lan: widget.property({
            type: 'number',
            defaultValue: 0
        }),
        text: widget.property({
            type: 'string'
        }),

        // Initialize widget
        init: function() {
            var subscriber;

            // init UI functions
            // show coordinates
            function showCoordinates(e) {
                alert(e.latlng);
            }
            // Right-click features
            function centerMap(e) {
                map.panTo(e.latlng);
            }

            /*
			// zoom
            function zoomIn(e) {
                map.zoomIn();
            }

            function zoomOut(e) {
                map.zoomOut();
            }
            */

            // map creation
            this._map = L.map(this.node, {
                contextmenu: true,
                contextmenuWidth: 140,
                contextmenuItems: [{
                    text: 'Show coordinates',
                    callback: showCoordinates
                }]
            });


            /*
			// Leaflet.draw controls
            var drawnItems = new L.FeatureGroup();
            this._map.addLayer(drawnItems);

            var drawControl = new L.Control.Draw({
                edit: {
                    featureGroup: drawnItems
                }
            });
            this._map.addControl(new L.Control.Draw({
                edit: {
                    featureGroup: drawnItems
                }
            }));

            this._map.on('draw:created', function(event) {
                var layer = event.layer;
                drawnItems.addLayer(layer);
            });
			*/

            // setting layers
            // base layers
            var openstreetmap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    			attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            });
            this._map.addLayer(openstreetmap);

            var openstreetmapbw = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
            this._map.addLayer(openstreetmapbw);

            var thunderforest = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png');
            this._map.addLayer(thunderforest);

            var hillshade = L.tileLayer.wms("http://129.206.228.72/cached/hillshade", {
                layers: 'europe_wms:hs_srtm_europa',
                format: 'image/png',
                opacity: 1,
                transparent: true,
                attribution: 'Hillshade layer by GIScience http://www.osm-wms.de',
                crs: L.CRS.EPSG900913
            });
            this._map.addLayer(hillshade); //OSM-WMS Uni Heidelberg

            var baseLayers = {
                "OpenStreetMap": openstreetmap,
                "OpenStreetMap bw": openstreetmapbw,
                "Hillshade": hillshade,
                "Thunderforest": thunderforest
            };

            /*
			//app layers (TO DO)
		    var castles = L.geoJson( castelli, {
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.DENOMINAZ +"<br>" +  feature.properties.COMUNE +"<br>" + feature.properties.CATEGORIA +"<br>" + feature.properties.D_CATAST);
				}
			});
			this._map.addLayer(castles);
			
			var citylimits = L.geoJson( comunidipuglia, {
				style: function (feature) {
					return { weight: 0.5, opacity: 1, fillOpacity: 0.2, fillColor: "red" };
				},
				onEachFeature: function (feature, layer) {
					layer.bindPopup(feature.properties.COMUNE);
				}
			});
			this._map.addLayer(citylimits);
			
			var overlays = {
				"castles": castles,
				"citylimits": citylimits
			};
			*/
			var myMapsPath = "/data"
			

            // Adding layers control and scale bar
            // VERSION WITH OVERLAYS L.control.layers(baseLayers, overlays).addTo(this._map);
            L.control.layers(baseLayers).addTo(this._map);
            L.control.scale().addTo(this._map);

            // Listen for updates
            subscriber = this.subscribe('change', this._update, this);
            subscriber.options.once = true;
            this._update();

            function proxyEvent(eventName, self) {
                return function(e) {
                    self.fire(eventName, e.data);
                };
            }

            // ****** Events 
            // Propagate map events to waf listeners
            this._map.on({
                "click": proxyEvent('click', this),
                "dblclick": proxyEvent('dblclick', this),
                "mousedown": proxyEvent('mousedown', this),
                "mouseup": proxyEvent('mouseup', this),
                "mouseover": proxyEvent('mouseover', this),
                "mouseout": proxyEvent('mouseout', this)
            });
        },

        // Return map object
        getMap: function() {
            return this._map;
        },

        // Update map view
        _update: function() {
            var latlng = new L.LatLng(this.lat() || 0, this.lan() || 0);
            this._map.setView(latlng, this.zoom() || 0);
            this._map.invalidateSize();

            if(!this._marker) {
                this._marker = L.marker(latlng);
                this._marker.addTo(this._map);
            }

            this._marker.setLatLng(latlng);

            if(this.text()) {
                this._marker.bindPopup(this.text());
                this._marker.openPopup();
            }
            else {
                this._marker.setPopupContent('');
                this._marker.closePopup();
            }
        }
    });

    return Leaflet;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */