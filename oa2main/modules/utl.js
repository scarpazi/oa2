/**
 * @fileOverview ssjs utilities
 * @author <a href="mailto:welsh.harris@corebitsdw.com">Welsh Harris</a>
 * @created 06/18/2011
 * @modified 06/29/2011 added logic for dates for importTabDelim 
 * @example
 * var utl = require('utl');
 */



/**
 * Import tab delimited text file data into an object with an array for each column.
 * @param {String} fileName File name stored in /import.
 * @param {Bool} hdrRow If the file to import has a header row.
 * @param {String} 1-n names to use for the arrays corresponding to each imported column.
 * @example
 * var arrImport = new utl.arr_import("zShipTos.txt", true, "locID", "custID", "shipToNo");
 */
exports.arr_import = function(fileName, hdrRow) {
	var numCols; 		// hold number of cols to import
	var importRows; 	// array to hold all imported rows
	var importCols; 	// array to hold columns of a row

	// set numCols based on number of arguments passed
	numCols = arguments.length - 2

	// import the file rows into a text array
	importRows = loadText(ds.getModelFolder().path + "import/"+fileName).split(/\r|\n/);

	// clean up the import rows
	if (hdrRow == true) { // optionally delete header row
		importRows.shift(); 
	};
	if (importRows[importRows.length-1].search(/^\d*$/) != -1) { // make sure the last row isn't blank
		importRows.pop();
	};

	// add an array property to our ImportObj for each col
	for (var e = 0; e < numCols; e++) {
		this[arguments[e+2]] = [];
	};

	// split each row into our ImportObj col arrays
	for (var r = 0; r < importRows.length; r++) {
		importCols = importRows[r].split("\t");
		for (var c = 0; c < numCols; c++) {
			this[arguments[c+2]][r] = importCols[c];
		};
	};
};


/**
 * Import tab delimited text file data into a datastore class.
 * @param {String} dsClassName Name of the datastore class we are importing data into.
 * @param {String} fileName File name stored in project/import.
 * @param {Bool} hdrRow If the file to import has a header row.
 * @param {String[]} attributeNames Attribute names corresponding to import file columns.
 * @return {String} Summary of the import.
 * @example
 * utl.importTabDelim('Person', 'PersonImport.txt', true, ['ID', 'firstName', 'lastName']);
 */
exports.importTabDelim = function(dsClassName, fileName, hdrRow, attributeNames) {
	var i, filePath, importRow, importStream, highestID;
	var importingID // bool indicating if we are importing into the ID field
	var posID // position of the ID element in the attributeNames array if there is one
	var row // string to hold data for one row of the import file
	var cells // array with an element for each cell of a row
	var newEntity // reference to newly created entities
	var numEntitiesImported // count how many records we import
	var importSmmry // string summarizing the import

	// get the file path
	filePath = ds.getModelFolder().path + "import/" + fileName;

	// determine if we are importing ID
	importingID = false
	posID = attributeNames.indexOf('ID'); // get the position of our ID field. 
	if(posID > -1) {
		importingID = true;
	};

	// open a text stream to the import file
	importStream = TextStream(filePath, 'read');

	//skip the header
	if(hdrRow) {
		row = importStream.read('');
	};

	//loop over each row
	numEntitiesImported = 0;
	while (!importStream.end()) { 

		row = importStream.read(''); //get this row
		cells = row.split('\t'); //split into array with an element for each column cell
		if (cells.length  >= attributeNames.length) { //if the array has an element for each attribute

			// make sure the record doesn't already exist if we are importing ID's
			importRow = true;
			if(importingID) {
				importRow = (ds[dsClassName].find('ID = ' + cells[posID]) === null) 
			};

			// build new entity
			if(importRow) {
				newEntity = ds[dsClassName].createEntity(); //create the new entity
				for(i = 0; i < attributeNames.length; i += 1) { //set each entity field
					if (ds[dsClassName][attributeNames[i]].type === 'date') {
						newEntity[attributeNames[i]] = new Date(cells[i]);
					} else {
						newEntity[attributeNames[i]] = cells[i];
					}; //end if
				}; //end for
				newEntity.save(); //save the entity
				numEntitiesImported = numEntitiesImported + 1;
			}; //end if

		}; //end if
	}; //end while
	importStream.close(); // close the file

	// reset id sequence number if we imported id values
	if(importingID) {
		highestID = ds[dsClassName].orderBy('ID desc').first().ID;
		ds[dsClassName].setAutoSequenceNumber(highestID + 1)
	};

	// return summary of the import
	importSmmry = numEntitiesImported.toString() + ' records imported into the ' + ds[dsClassName].getName() + ' datastore class.';
	return importSmmry;
};

