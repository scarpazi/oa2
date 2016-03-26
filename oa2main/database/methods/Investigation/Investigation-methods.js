

model.Investigation.collectionMethods.defBindColl = function() {
	var bindColl = this.query("tmpDefComplete != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.DictionaryLemma.find( "cvalue === :1", currLemma.tmpDefComplete);
        	currLemma.defObjInv = bindObj;
    	}
    );
};


model.Investigation.collectionMethods.dirBindColl = function() {
	var bindColl = this.query("tmpDirName != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.Person.find( "fullName === :1", currLemma.tmpDirName);
        	currLemma.director = bindObj;
    	}
    );
};


model.Investigation.collectionMethods.rangeBindColl = function() {
	var bindColl = this.query("tmpIDoa2Range != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.ChronRange.find( "tmpRangeID === :1", currLemma.tmpIDoa2Range);
        	currLemma.durationInv = bindObj;
    	}
    );
};
