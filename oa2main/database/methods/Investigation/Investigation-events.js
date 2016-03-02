

model.Investigation.durationText.onGet = function() {
	if (this.durationInv != null) {
		return this.durationInv.start.year + " - " + this.durationInv.end.year;		
	}
};
