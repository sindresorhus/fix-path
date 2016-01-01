import test from 'ava';
import m from './';

test(t => {
	m();
	t.true(process.env.PATH.indexOf('/usr/local') !== -1);
});
