'use strict';
var test = require('ava');
var fixPath = require('./');

test(function (t) {
	fixPath();
	t.assert(process.env.PATH.indexOf('/usr/local') !== -1, process.env.PATH);
	t.end();
});
