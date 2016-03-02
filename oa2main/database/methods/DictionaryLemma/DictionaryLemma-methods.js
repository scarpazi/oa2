

model.DictionaryLemma.entityMethods.dicBindCurr = function(bindID) {
	var dicObj = ds.Dictionary.find( "ID === :1", bindID);
	this.dicObject = dicObj;
	this.save();
};


model.DictionaryLemma.collectionMethods.dicBindColl = function() {
	var bindColl = this.query("tmpDicID > 0") ;
	bindColl.forEach(
   		function( currLemma, i ) {
			var dicObj = ds.Dictionary.find( "ID === :1", currLemma.tmpDicID);
        	currLemma.dicObject = dicObj;
        	// unnecessary to save modification
        	// forEach does it automatically when needed
        });

};

model.DictionaryLemma.collectionMethods.plBindColl = function() {
	var bindColl = this.query("tmpPlID > 0") ;
	bindColl.forEach(
   		function( currLemma ) {
			var plObj = ds.DictionaryLemma.find( "ID === :1", currLemma.tmpPlID);
        	currLemma.primarylemma = plObj;
        	// unnecessary to save modification
        	// forEach does it automatically when needed
        });

};
