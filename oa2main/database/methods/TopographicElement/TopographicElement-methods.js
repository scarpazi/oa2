

model.TopographicElement.collectionMethods.defBindColl = function() {
	var bindColl = this.query("tmpDefComplete != null") ;
	bindColl.forEach(
   		function( currLemma, i ) {
			var defObj = ds.DictionaryLemma.find( "cvalue === :1", currLemma.tmpDefComplete);
        	currLemma.defObjTe = defObj;
        });

};

model.TopographicElement.collectionMethods.chronRangeBindColl = function() {
	var bindColl = this.query("tmpIDoa2Range != null") ;
	bindColl.forEach(
   		function( currLemma, i ) {
			var rangeObj = ds.ChronRange.find( "tmpRangeID === :1", currLemma.tmpIDoa2Range);
        	currLemma.chronologyTe = rangeObj;
        });
};
