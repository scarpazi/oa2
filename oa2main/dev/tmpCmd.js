// reset id sequence number to the actual highest ID
 function updateHighestID(dsClassName) {
	highestID = ds[dsClassName].orderBy('ID desc').first().ID;
	ds[dsClassName].setAutoSequenceNumber(highestID + 1)
 }



//*** update highest ID (AutoSequence) ***
//updateHighestID("LandscapeElement");



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
tmpColl = ds.SourceRef.all();
tmpColl.sourceBindColl();
