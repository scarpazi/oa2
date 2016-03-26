model.Source.collectionMethods.defBindColl = function() {
	var bindColl = this.query("tmpDefComplete != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.DictionaryLemma.find( "cvalue === :1", currLemma.tmpDefComplete);
        	currLemma.defObjSource = bindObj;
    	}
    );
};

model.Source.collectionMethods.mainInvBindColl = function() {
	var bindColl = this.query("tmpIDoa2Inv != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.Investigation.find( "ID === :1", currLemma.tmpIDoa2Inv);
        	currLemma.mainInvestigation = bindObj;
    	}
    );
};
