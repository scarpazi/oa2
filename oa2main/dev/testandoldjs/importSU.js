var utl = require('wakanda-tsv');

/**
 * @param {String} dsClassName Name of the datastore class we are importing data into.
 * @param {String} fileName File name stored in project/import.
 * @param {Boolean} hdrRow If the file to import has a header row.
 * @param {String[]} attributeNames Attribute names corresponding to import file columns.
 * @return {String} Summary of the import.
 */
importSummary = utl.importTabDelim(
    "BiblioTitle",
    "biblio.txt",
    true,
    (["ID", "Idbiblio", "biblioText"])
);

console.log(importSummary); //display the import summary in the console