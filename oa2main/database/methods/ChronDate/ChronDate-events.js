
function toInt(value) {
    return value | 0;
}

function getCenturyFraction(year, meaning) {
	centuryFraction = "Error in century fraction assignement | x";
	switch (meaning) {
		case "Secolo": centuryFraction = "";
		case "Mezzo secolo":
			if (year > 0) {
				centuryFraction = toInt((year % 100) / 50) + 1;		
			} else {
				centuryFraction = toInt((year % 100) / 50) + 2;
			}
			switch (centuryFraction) {
				case 1: centuryFraction = "Prima metà "; break;
				case 2: centuryFraction = "Seconda metà ";
			}
		break;
		case "Terzo di secolo":
			if (year > 0) {
				centuryFraction = toInt((year % 100) / 33) + 1;		
			} else {
				centuryFraction = toInt((year % 100) / 33) + 3;
			}
			switch (centuryFraction) {
				case 0: centuryFraction = "Primo terzo "; break;
				case 1: centuryFraction = "Primo terzo "; break;
				case 2: centuryFraction = "Secondo terzo "; break;
				case 3: centuryFraction = "Ultimo terzo "; break;
				case 4: centuryFraction = "Ultimo terzo ";
			}
		break;
		case "Quarto di secolo":
			if (year > 0) {
				centuryFraction = toInt((year % 100) / 25) + 1;		
			} else {
				centuryFraction = toInt((year % 100) / 25) + 4;
			}
			switch (centuryFraction) {
				case 1: centuryFraction = "Primo quarto "; break;
				case 2: centuryFraction = "Secondo quarto "; break;
				case 3: centuryFraction = "Terzo quarto "; break;
				case 4: centuryFraction = "Ultimo quarto ";
			}
		break;
		case "Ventennio":
			if (year > 0) {
				centuryFraction = toInt((year % 100) / 20) + 1;		
			} else {
				centuryFraction = toInt((year % 100) / 20) + 5;
			}
			switch (centuryFraction) {
				case 1: centuryFraction = "Primo ventennio "; break;
				case 2: centuryFraction = "Secondo ventennio "; break;
				case 3: centuryFraction = "Terzo ventennio "; break;
				case 4: centuryFraction = "Quarto ventennio "; break;
				case 5: centuryFraction = "Ultimo ventennio ";
			}
		break;
		case "Decennio":
			if (year > 0) {
				centuryFraction = toInt((year % 100) / 10) + 1;		
				} else {
				centuryFraction = toInt((year % 100) / 10) + 10;
			}
			switch (centuryFraction) {
				case 1: centuryFraction = "Primo decennio "; break;
				case 2: centuryFraction = "Secondo decennio "; break;
				case 3: centuryFraction = "Terzo decennio "; break;
				case 4: centuryFraction = "Quarto decennio "; break;
				case 5: centuryFraction = "Quinto decennio "; break;
				case 6: centuryFraction = "Sesto decennio "; break;
				case 7: centuryFraction = "Settimo decennio "; break;
				case 8: centuryFraction = "Ottavo decennio "; break;
				case 9: centuryFraction = "Nono decennio "; break;
				case 10: centuryFraction = "Ultimo decennio ";
			}
		break;
		case "Inizi secolo":
			if ((year % 100) == 0) {
				centuryFraction = "Inizi ";
			}
		break
		case "Metà secolo":
			if ((year % 100) == 50) {
				centuryFraction = "Metà ";
			}
		break;
		case "Fine secolo":
			if ((year % 100) == 99) {
				centuryFraction = "Fine ";		
			}
		break;
		case "Anno": centuryFraction = "";
	}
	return centuryFraction;
}

function getCentury(year, meaning) {
	century = "Error in century assignement (out of range) | "
	if (meaning == "Anno") {
		century = year + " "
	} else {
		if (year>0) {
			centuryCheck = (toInt(year / 100) + 1);
		} else if (year<0) {
			centuryCheck = (toInt(year / 100) - 1)
		}
		switch (centuryCheck) {
			case -21: century = "XXI"; break;
			case -20: century = "XX"; break;
			case -19: century = "XIX"; break;
			case -18: century = "XVIII"; break;
			case -17: century = "XVII"; break;
			case -16: century = "XVI"; break;
			case -15: century = "XV"; break;
			case -14: century = "XIV"; break;
			case -13: century = "XIII"; break;
			case -12: century = "XII"; break;
			case -11: century = "XI"; break;
			case -10: century = "X"; break;
			case -9: century = "IX"; break;
			case -8: century = "VIII"; break;
			case -7: century = "VII"; break;
			case -6: century = "VI"; break;
			case -5: century = "V"; break;
			case -4: century = "IV"; break;
			case -3: century = "III"; break;
			case -2: century = "II"; break;
			case -1: century = "I"; break;
			case 1: century = "I"; break;
			case 2: century = "II"; break;
			case 3: century = "III"; break;
			case 4: century = "IV"; break;
			case 5: century = "V"; break;
			case 6: century = "VI"; break;
			case 7: century = "VII"; break;
			case 8: century = "VIII"; break;
			case 9: century = "IX"; break;
			case 10: century = "X"; break;
			case 11: century = "XI"; break;
			case 12: century = "XII"; break;
			case 13: century = "XIII"; break;
			case 14: century = "XIV"; break;
			case 15: century = "XV"; break;
			case 16: century = "XVI"; break;
			case 17: century = "XVII"; break;
			case 18: century = "XVIII"; break;
			case 19: century = "XIX"; break;
			case 20: century = "XX"; break;
			case 21: century = "XXI";		
		}
		century = century + " secolo "
	}
	return century
}

function getADbC (year) {
	if (year > 0) {
		ADbC = "d.C."
	} else if (year < 0) {
		ADbC = "a.C."
	} else {
		ADbc = "Error in AD/bC assignement (value cannot be 0)"
	}
	return ADbC
}
model.ChronDate.chronText.onGet = function() {
	if ((this.year != null) && (this.meaning != null)) {
		return (getCenturyFraction(this.year, this.meaning) + getCentury(this.year, this.meaning) + getADbC(this.year));
	} else {
		return ("Error: year and/or meaning are missing");		
	}
};
