

model.Person.fullName.onGet = function() {
	if(this.lastName != null) {
		if(this.firstName != null) {
			return this.lastName + ", " + this.firstName;			
		} else {
			return this.lastName;
		};
	} else {
	return "Error: last name missing";
		
	}
};
