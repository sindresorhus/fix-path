'use strict';
var shellPath = require('shell-path');
var fallbackPath = [
		'./node_modules/.bin',
		'/.nodebrew/current/bin',
		'/usr/local/bin',
		process.env.PATH
	].join(':');

module.exports = function (cb) {
	if (process.platform !== 'darwin') {
		return;
	}

	process.env.PATH = shellPath.sync() || fallbackPath;
};

module.exports.async = function (cb) {
	if (process.platform !== 'darwin') {
		return cb();
	}

	shellPath(function (err, newPath) {
		process.env.PATH = !err ? newPath : fallbackPath;
		cb(err);
	});
};
