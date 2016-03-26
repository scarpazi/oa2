// *** reset id sequence number to the actual highest ID ***
 function updateHighestID(dsClassName) {
	highestID = ds[dsClassName].orderBy('ID desc').first().ID;
	ds[dsClassName].setAutoSequenceNumber(highestID + 1)
 }

 function teBindSingleL(bindColl, leObjID) {
	var bindObj = ds.Landscape.find( "ID === :1", leObjID)
	bindColl.forEach(
   		function( currLemma ) {
			if (currLemma.lTe = "undefined") {
				currLemma.lTe = bindObj;
			}
    	}
    );
}

 function teBindSingleLe(bindColl, leObjID) {
	var bindObj = ds.LandscapeElement.find( "ID === :1", leObjID)
	bindColl.forEach(
   		function( currLemma ) {
			if (currLemma.leTe = "undefined") {
				currLemma.leTe = bindObj;
			}
    	}
    );
}


//*** update highest ID (AutoSequence) ***
//updateHighestID("LandscapeElement");



//*** TopographicElement: bind entity collection to single Landscape ***
//teColl = ds.TopographicElement.all();
//teBindSingleL(teColl, 1);

//*** TopographicElement: bind entity collection to single LandscapeElement ***
//teColl = ds.TopographicElement.all();
//teBindSingleLe(teColl, 2);




//*** DicLemma: bind Dictionary to single entity ***
//var ppp = ds.DictionaryLemma(68);
//ppp.dicBindCurr(ppp.tmpDicID);
//ccc = ccc + " funziona davvero!";


//*** DicLemma: bind Dictionary to entity collection ***
//tmpColl = ds.DictionaryLemma.all();
//tmpColl.dicBindColl();


//*** DicLemma: bind entity collection to primary lemma ***
//tmpColl = ds.DictionaryLemma.all();
//tmpColl.plBindColl();


//*** TopographicElement: bind entity collection to te.definition lemma ***
//tmpColl = ds.TopographicElement.all();
//tmpColl.defBindColl();


//*** TopographicElement: bind entity collection to chronrange ***
//tmpColl = ds.TopographicElement.all();
//tmpColl.chronRangeBindColl();


//*** Toponym: bind entity collection to TopographicElement (mainToponym) ***
//tmpColl = ds.TopographicElement.all();
//tmpColl.mainToponymBindColl();


//*** ChronRange: bind entity collection to chrondate (start and end) ***
//tmpColl = ds.ChronRange.all();
//tmpColl.yearBindColl();


//*** BiblioRef: bind entity collection to BiblioTitle ***
//tmpColl = ds.BiblioRef.all();
//tmpColl.biblioBindColl();


//*** BiblioRef: bind entity collection to TopographicElement ***
//tmpColl = ds.BiblioRef.all();
//tmpColl.teBindColl();


//*** SourceRef: bind entity collection to TopographicElement ***
//tmpColl = ds.SourceRef.all();
//tmpColl.teBindColl();


//*** SourceRef: bind entity collection to Source ***
//tmpColl = ds.SourceRef.all();
//tmpColl.sourceBindColl();


//*** Source: bind entity collection to source.definition lemma ***
//tmpColl = ds.Source.all();
//tmpColl.defBindColl();


//*** Source: bind entity collection to Investigation ***
//tmpColl = ds.Source.all();
//tmpColl.mainInvBindColl();


//*** Investigation: bind entity collection to investigation.type lemma ***
//tmpColl = ds.Investigation.all();
//tmpColl.defBindColl();


//*** Investigation: bind entity collection to Person (Director) ***
//tmpColl = ds.Investigation.all();
//tmpColl.dirBindColl();


//*** Investigation: bind entity collection to Person (Director) ***
//tmpColl = ds.Investigation.all();
//tmpColl.rangeBindColl();

