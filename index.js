'use strict';
module.exports = function () {
	if (process.platform !== 'darwin') {
		return;
	}

	process.env.PATH = [
		'./node_modules/.bin',
		'/.nodebrew/current/bin',
		'/usr/local/bin'
	].join(':') + ':' + process.env.PATH;
};
