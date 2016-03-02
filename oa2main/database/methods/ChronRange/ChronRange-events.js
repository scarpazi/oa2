function checkChronRange(start, end) {
	if(start.year > end.year) {return "Error - Chronological range. Start year cannot be greater than end year";
	} else {return "";}
}

model.ChronRange.chronText.onGet = function() {
	/*
	 *** OLD SCRIPT *** NOT WORKING *** 
	tmpChronText = checkErrChronRange(this.start, this.end)
	if(tmpChronText = "") {
		if ((this.start.year < 0) && (this.end.year >= 0)) {
			tmpChronText = this.start.chronText + " - " + this.end.chronText;
		} else {
			if (this.start.year < 0) {
				startClean = str.replace(" secolo a.C.", "");
			} else {
				startClean = str.replace(" secolo d.C.", "");
			}
			tmpChronText = startClean + " - " + this.end.chronText;
		}
	}
	return tmpChronText;*/
	
	if ((this.start != null) && (this.end != null)) {
		chronTextCheck = checkChronRange(this.start, this.end)
		if(chronTextCheck == "") {return this.start.chronText + " - " + this.end.chronText;} else {return chronTextCheck;}	
	} else {
		return ("Error: start and/or end chronology missing");
	}
};

model.ChronRange.tmpRangeID.onGet = function() {
	return this.tmpYearStartID + "|" + this.tmpYearEndID;
};
