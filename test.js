import test from 'ava';
import fixPath from '.';

test('main', t => {
	fixPath();

	t.true(process.env.PATH.includes('/usr/local'));
});
