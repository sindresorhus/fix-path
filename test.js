'use strict';
var test = require('ava');
var fixPath = require('./');

test('sync', function (t) {
	fixPath();
	t.assert(process.env.PATH.indexOf('/usr/local') !== -1, process.env.PATH);
	t.end();
});

test('async', function (t) {
	t.plan(1);
	fixPath.async(function(err) {
		if (!err) {
			t.assert(process.env.PATH.indexOf('/usr/local') !== -1, process.env.PATH);
		}
		else {
			t.fail();
		}
	});
});
