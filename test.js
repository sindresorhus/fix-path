import process from 'node:process';
import test from 'ava';
import fixPath from './index.js';

test('main', t => {
	fixPath();

	t.true(process.env.PATH.includes('/usr/local'));
});
