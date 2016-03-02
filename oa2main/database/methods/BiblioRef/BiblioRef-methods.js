

model.BiblioRef.collectionMethods.biblioBindColl = function() {
	var bindColl = this.query("tmpIDbiblio != null") ;
	bindColl.forEach(
   		function( currLemma, i ) {
			var bindObj = ds.BiblioTitle.find( "tmpIDbiblio === :1", currLemma.tmpIDbiblio);
        	currLemma.biblioTitleObj = bindObj;
        });
};


model.BiblioRef.collectionMethods.teBindColl = function() {
	var bindColl = this.query("tmpIDoa2Te != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.TopographicElement.find( "tmpIDoa2Te === :1", currLemma.tmpIDoa2Te);
        	currLemma.teRef = bindObj;
        });
};
