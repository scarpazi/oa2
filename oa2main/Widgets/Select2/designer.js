(function(Select2) {

    /* Default width and height of your widget */
    Select2.setWidth('200');
    Select2.setHeight('30');

    /* Define custom event for your widget */
    Select2.addEvent('change');
    Select2.addEvent('opening');
    Select2.addEvent('open');
    Select2.addEvent('highlight');
    Select2.addEvent('selecting');
    Select2.addEvent('focus');
    Select2.addEvent('blur');
});