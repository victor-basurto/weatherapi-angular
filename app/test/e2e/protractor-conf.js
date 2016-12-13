exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'*.js'
	],

	capabilities: {
		'browserName': 'chrome'
	},

	chromeOnly: true,

	baseUrl: 'http://localhost:8000/',

	framework: 'jasmine',


	onPrepare: function() {
		browser.ignoreSynchronization = true;
		browser.driver.get(browser.baseUrl);
	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	}
};
