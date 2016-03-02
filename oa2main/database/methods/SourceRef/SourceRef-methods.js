

model.SourceRef.collectionMethods.sourceBindColl = function() {
	var bindColl = this.query("tmpIDoa2Source != null") ;
	bindColl.forEach(
   		function( currLemma, i ) {
			var bindObj = ds.Source.find( "ID === :1", currLemma.tmpIDoa2Source);
        	currLemma.sourceObj = bindObj;
        })
};


model.SourceRef.collectionMethods.teBindColl = function() {
	var bindColl = this.query("tmpIDoa2Te != null") ;
	bindColl.forEach(
   		function( currLemma ) {
			var bindObj = ds.TopographicElement.find( "tmpIDoa2Te === :1", currLemma.tmpIDoa2Te);
        	currLemma.teRef = bindObj;
        });
};