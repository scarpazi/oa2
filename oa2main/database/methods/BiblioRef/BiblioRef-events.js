

model.BiblioRef.biblioRefShort.onGet = function() {
	if (this.pages != "") {
		var calcpages = ", p. " + this.pages;
	} else {
		var calcpages = "";

	}
	return this.tmpIDbiblio + calcpages;

};
