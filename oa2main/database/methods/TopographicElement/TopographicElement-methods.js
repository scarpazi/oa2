

model.TopographicElement.collectionMethods.defBindColl = function() {
	var bindColl = this.query("tmpDefComplete != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.DictionaryLemma.find( "cvalue === :1", currLemma.tmpDefComplete);
        	currLemma.defObjTe = bindObj;
        });

};

model.TopographicElement.collectionMethods.chronRangeBindColl = function() {
	var bindColl = this.query("tmpIDoa2Range != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.ChronRange.find( "tmpRangeID === :1", currLemma.tmpIDoa2Range);
        	currLemma.chronologyTe = bindObj;
        });
};


model.TopographicElement.collectionMethods.mainToponymBindColl = function() {
	var bindColl = this.query("tmpIDoa2Te != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.Toponym.find( "tmpIDoa2Te === :1", currLemma.tmpIDoa2Te);
        	currLemma.mainToponymTe = bindObj;
        });
};
