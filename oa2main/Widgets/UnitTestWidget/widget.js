var _waktest_widget, _waktest_widget_opened;

function _waktest_widget_moduleIsAvailable(callback) {
	if (typeof designer === 'object' && typeof studio === 'object') {
		try {
			var serverAddress = studio.getRemoteServerInfo().split(':');
			var serverPort = /\sport="(\d+)"/i.exec(studio.File(studio.editor.getProjectPath() + 'Settings.waSettings').toString())[1];
			var moduleURL = serverAddress[0] + ':' + serverAddress[1] + ':' + serverPort + '/waktest-available';
		} catch (e) {
			var moduleURL = 'http://127.0.0.1:8081/waktest-available';
		}
	} else {
		var moduleURL = '/waktest-available';
	}
    var http = new XMLHttpRequest();
    http.open('HEAD', moduleURL);
    http.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            callback(this.status != 404);
        }
    };
    http.send();
}

function _waktest_widget_run() {
	$('#waktest-waf-run', _waktest_widget.node).prop('disabled', true);
	$('#waktest-waf-log').empty();
	if (_waktest_widget_opened === false) {
		_waktest_widget_opened = true;
		$('#waktest-waf-log', _waktest_widget.node).animate({
			width: 600,
			height: 400,
			opacity: 1
		}, 250, function() {
			$('#waktest-close', _waktest_widget.node).show();
			_waktestRun();
		});
	} else {
		_waktestRun();
	}
}

function _waktest_widget_close() {
	if (_waktest_widget_opened === true) {
		$('#waktest-waf-log').empty();
		$('#waktest-close', _waktest_widget.node).hide();
		$('#waktest-waf-log', _waktest_widget.node).animate({
			width: 250,
			height: 48,
			opacity: 0
		}, 250, function() {
			_waktest_widget_opened = false;
		});
	}
}

WAF.define('UnitTestWidget', ['waf-core/widget'], function(widget) {
	var UnitTestWidget = widget.create('UnitTestWidget', {
		init: function() {
			_waktest_widget_opened = false;
			this.node.innerHTML += '<div id="waktest-waf" class="waf-studio-donotsave waf-ui-box waf-ui-header"><div id="waktest-waf-toolbar"><img src="data:image/png;base64,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"/><span id="waktest-waf-file" class="ui-menu-item"></span><input id="waktest-waf-run" class="waf-ui-button" type="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMaDAARNBIQ5wAAApVJREFUWMPtlk1IVVEQx39Pw13RIlsY1SJoYZKcbSBYCClJkER+tGpaBRKkLfokzCAXRRDUQmJWmR+EEAivQFJwZQQHIqWwCCMMKimoVV+vzTy4XN5997z33OVs7uXMnP/MnZk784d1+d8lU4qxiOwAuoEDQD1QC/wCPgDLwAwwoarv1jQAczwEHAOqU8z/ABPAOVV9X3EAItIOjACbDHwKeAjMAytADVAHOOAo0G5Bfgd6VHWq7ABE5DRwC6gCpoFeVX2dcmc3cAdoAf4CZ1T1dpJ9dRGgTuCeOR8ETqrql7SMee9XnXP37V4z0Oqce+W9XwjOgIhsBxaAjcB1Vb1QToeLyDXgopWjoVBPVCXcHTLnswYQBR0WkSOBMVwGnuY/JCgDIrITeGs6p6ovYvqcvc4CfarqU7KwF/BADtilqstpGeiy3sjGncekGXguIndFZEuSkWFkDbMrpAT77TkZkOIq4BSwJCL9IlKTYDcZwy4aQIM950rot83ADcCLSGsB/VwMu2gA+XSulNH49UBWRLI2D4hh1Yb+BZVKa1LXhwSQHzZ1ZTr/CdwEJHKWx/ocN95QAOAlsA1oApZKdP4IOKuqb2LnTRHs1ABmgINAB6CBjheBflV9nKDviGCnlmDMtl6bDZFi8g3oBRqTnBtGmy2msdBdMAL02BhtUdWcnWcM6DcwDFwptqDMftoIzANVPR5SAoDzwGG7OAhcimzPPuCJqi4GlOaqYfwwzHA+YOt41GwG7WtzgVswAwzYMsoB3ao6XhIf8N4vOOe+WkM2A/ucc/Pe+9UAQjIKnIgQEl1rSjYBPAM+RihZo3HGQ1bayilZAVLaGTA915aUFgikx7baHmCrqT4Zg5oBxkuh5euyLv8ATUDjdyJucZUAAAAASUVORK5CYII=" alt="Run" title="Run" onclick="_waktest_widget_run()"></div><div id="waktest-waf-log" class="waf-ui-box"></div><img id="waktest-close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIODh0QEC7QcAAAACdJREFUGNNjZGBg+M+ACRhhDBZsgujgPxqNUwFORf8J8BmI0USBIgAaqgn+e52qFAAAAABJRU5ErkJggg==" alt="Close" title="Close" onclick="_waktest_widget_close()"/></div>';
		},
		/*runner: widget.property({
			type: "enum",
			"values": {
				mocha: "Mocha"
			},
			bindable: false,
			description: 'Runner library'
		}),
		assertion: widget.property({
			type: "enum",
			"values": {
				chai: "Chai"
			},
			bindable: false,
			description: 'Assertion library'
		}),
		assertionStyle: widget.property({
			type: "enum",
			"values": {
				bdd: "BDD",
				tdd: "TDD"
			},
			bindable: false,
			description: 'Assertion style'
		}),*/
		file: widget.property({
			type: 'string',
			description: 'Path to the test file or folder to run'
		}),
		automatic: widget.property({
			type: 'boolean',
			defaultValue: false,
			bindable: false,
			description: 'Run automatically'
		}),
		runInStudio: widget.property({
			type: 'boolean',
			defaultValue: false,
			bindable: false,
			description: 'Run in Studio'
		})
	});
	UnitTestWidget.doAfter("init", function() {
		var _this = _waktest_widget = this;
		var automatic = _this.automatic();
		var testFilePath = null;
		if (_this.file()) {
			testFilePath = _this.file().replace(/^\/?\.\//, '');
		}
		if (typeof window !== 'undefined' && typeof window.location !== 'undefined') {
			if (typeof designer !== 'object') {
				$('#waktest-waf', _this.node).draggable();
			}
			var match,
				pl = /\+/g,
				search = /([^&=]+)=?([^&]*)/g,
				decode = function(s) {
					return decodeURIComponent(s.replace(pl, " "));
				},
				query = window.location.search.substring(1),
				urlParams = {};
			while (match = search.exec(query)) urlParams[decode(match[1])] = decode(match[2]);
			if (typeof urlParams['waktest-path'] !== 'undefined') {
				testFilePath = urlParams['waktest-path'].replace(/^\/?\.\//, '');
				automatic = true;
			}
		}
		_waktest_widget_moduleIsAvailable(function (moduleAvailable) {
			window._waktest_waf_ready = function() {
				if (automatic === true && (typeof designer === 'undefined' || (typeof designer === 'object' && _this.runInStudio() === true)) && typeof _waktestRun === 'function') {
					if ($(_this.node).css('display') === 'none') {
						$(_this.node).show();
					}
					_waktest_widget_run();
				}
			};
			if (moduleAvailable === true && testFilePath !== null) {
				var testLink = testFilePath;
				if (testLink.length > 20) {
						testLink = '...' + testLink.substr(-17);
				}
				// var libraryURL = '/waktest-waf-lib?runner=' + _this.runner() + '&assertion=' + _this.assertion() + '&assertionStyle=' + _this.assertionStyle() + '&path=' + testFilePath + '&widgetId=' + _this.id;
				var libraryURL = '/waktest-waf-lib?runner=mocha&assertion=chai&assertionStyle=bdd&path=' + testFilePath + '&widgetId=' + _this.id;
				if (typeof urlParams !== 'undefined' && typeof urlParams['waktest-format'] !== 'undefined') {
					libraryURL += '&format=' + urlParams['waktest-format'];
				}
				// var cssURL = '/waktest-waf-css?runner=' + _this.runner() + '&widgetId=' + _this.id;
				var cssURL = '/waktest-waf-css?runner=mocha&widgetId=' + _this.id;
				if (typeof designer === 'object' && typeof studio === 'object') {
					try {
						var serverAddress = studio.getRemoteServerInfo().split(':');
						var serverPort = /\sport="(\d+)"/i.exec(studio.File(studio.editor.getProjectPath() + 'Settings.waSettings').toString())[1];
						libraryURL = serverAddress[0] + ':' + serverAddress[1] + ':' + serverPort + libraryURL;
						cssURL = serverAddress[0] + ':' + serverAddress[1] + ':' + serverPort + cssURL;
					} catch (e) {
						libraryURL = 'http://127.0.0.1:8081' + libraryURL;
						cssURL = 'http://127.0.0.1:8081' + cssURL;
					}
				}
				if (typeof designer === 'undefined' || (typeof designer === 'object' && _this.runInStudio() === true)) {
					var waktestScript = document.createElement('script');
					waktestScript.type = 'application/javascript';
					waktestScript.src = libraryURL;
					var waktestLink = document.createElement('link');
					waktestLink.rel = 'stylesheet';
					waktestLink.type = 'text/css';
					waktestLink.href = cssURL;
					document.getElementsByTagName('head')[0].appendChild(waktestScript);
					document.getElementsByTagName('head')[0].appendChild(waktestLink);
				}
				if (automatic === true) {
					$('#waktest-waf-file', _this.node).html(testLink + ' (auto)');
					$('#waktest-waf-run', _this.node).prop('disabled', true);
				} else {
					$('#waktest-waf-file', _this.node).html(testLink);
					$('#waktest-waf-run', _this.node).prop('disabled', false);
				}
			} else {
				if (testFilePath === null) {
					$('#waktest-waf-file', _this.node).html('No test specified');
					$('#waktest-waf-run', _this.node).prop('disabled', true);
				} else {
					$('#waktest-waf-run', _this.node).prop('disabled', true);
					$('#waktest-waf-run', _this.node).attr('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wMaDA0Q9rtePAAAA3FJREFUWMPtlk9sFHUUxz9vF9ZddrsU2G6xxNYE11Ah6ByIBw9GYoSgMbEktrYHkzlw8GDgBgl3uZl48GR+B5IaJHhTMV7woBxIcKC6bgO2RKGFdreuLV12+2f2x2FmWrfO7GyhN/vmMLuZ33vv+977ve97sCn/d5H1HDZNsxv4ADgMvAR0AEvAPeBP4ApwUSl1Z0MBuI7PAe8D0ZDjNnAROK2U+uupAZim+Q4wDKRFa/Y/esArlQl6Fsqk7Rq2RJiNxpmIbedGcg/5bbvRIgAPgUGl1DdPDMA0zY+BT4HIi9Vpjpdukl2uOIra1dagPSsailuTXMq8zK1EFqAOnFJKfRbkI9rEeT/wBRB5qzzKQOkXUvVFBHFQy2oI4v0VTbK+yKH5e2hgLJER4KhhGKOWZeVbBmCa5nPA98Azb/5zi7fLBURWXDdJp/toyC2UsEUYj2cEOGIYxrBlWbNrdSIBts4BbS9Uixwr59fZK046tNYcKxfIVYsAbcAnfkcjPtH3AP2iNX2lEafWPrLl9XdJXSoQ6zsRmA205r2ZXxGtAfpd26EZGACivdUpnl1+iIh/+NEDryI7s0S6c8HXW4SupTl6q1NeuQdaAfAGwMHKpIfcV/T8bHglXP2DlckG22EADgDsrc2gQy4cgK7MBYN0k7e3NtNgOwxABiBt15rShF6sOe/qI8IQOLbApe6WuoBVtvGX5Z++xS5cx77+4xPpNwNQApiLxpvq1+/+QfXsEPaoFepkLhr3fhZbAfAbwFh8l8fpvhLrO0Hq61FiQydDmX4svqvBdhiAKwAjyS6H5wM6wWs/SbUH1B9wdUeSXQ22wwBcAOxCopP7sXTwHbh5FXQdPXU38P6JCJNb0xQSnd5gutDSNDRNcxgYzFWLfPTg59XJ9x86jMHyon/04rw+3/0atxMdAF8qpYZa7YIzwPztRAff7ehd4Xa9lhnWONdop2Qu2MvtvZ7zeddma9PQsqxZwzDGgePj8YzUgdzCjJtXJ8KVkdywDwgiggYut+/jhx37vHx8qJS6uq59wLKsvGEYZeDIWCIjd+I7eX7hb1L1JUT89wERmN6S5Hz2ENfaev69kKgNXcmMygTda1ayydh2rOQeft/WSV0iG7OS+Syl/aHsudFLqQ+QQXeq7Qey7qdpIO/2+VfrWcs3ZVMeA1iLSrv449/2AAAAAElFTkSuQmCC');
					$('#waktest-waf-file', _this.node).html('Unit Test Module not available');
				}
			}
		});
	});
	return UnitTestWidget;
});
