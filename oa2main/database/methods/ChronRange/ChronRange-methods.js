

model.ChronRange.collectionMethods.yearBindColl = function() {
	var bindColl = this.query("tmpYearStartID != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.ChronDate.find( "tmpYearID === :1", currLemma.tmpYearStartID);
        	currLemma.start = bindObj;
        });

	var bindColl = this.query("tmpYearEndID != null") ;
	bindColl.forEach(
   		function( currLemma ) {
        	bindObj = ds.ChronDate.find( "tmpYearID === :1", currLemma.tmpYearEndID);
        	currLemma.end = bindObj;

        });

};
