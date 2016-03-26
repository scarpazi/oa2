(function(UnitTestWidget) {
	//    /* Default width and height of your widget */
	UnitTestWidget.setWidth('250');
	UnitTestWidget.setHeight('48');
	//    /* Define custom event for your widget */
	//    UnitTestWidget.addEvent('myEvent');
	/* Customize existing properties */
	/*UnitTestWidget.customizeProperty('runner', {
		title: 'Runner library',
		description: 'Runner library to use (currently supported: Mocha).'
	});

	UnitTestWidget.customizeProperty('assertion', {
		title: 'Assertion library',
		description: 'Assertion library to use (currently supported: Chai).'
	});

	UnitTestWidget.customizeProperty('assertionStyle', {
		title: 'Assertion style',
		description: 'Assertion style to use (currently supported: BDD, TDD).'
	});*/

	UnitTestWidget.customizeProperty('file', {
		title: 'Test path',
		description: 'Path to the test file or folder to run (JS script).'
	});

	UnitTestWidget.customizeProperty('automatic', {
		title: 'Run automatically',
		description: 'Run the attached test automatically on page load.'
	});

	UnitTestWidget.customizeProperty('runInStudio', {
		title: 'Run in Studio',
		description: 'Run the attached test in the Studio.'
	});
	//    /* Add a Label property */
	//    UnitTestWidget.addLabel({
	//        'defaultValue': '',
	//        'position': 'top'
	//    });
	//    /* Set the Design and Styles panels */
	//    UnitTestWidget.setPanelStyle({
	//        'fClass': true,
	//        'text': true,
	//        'background': true,
	//        'border': true,
	//        'sizePosition': true,
	//        'label': true,
	//        'disabled': ['border-radius']
	//    });
	//    /* Override widget's initialization */
	//    UnitTestWidget.prototype.init = function() {
	//        this.node.innerHTML = "Widget Text"; /* Include text inside the widget */
	//    }
});
// For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3870.html
