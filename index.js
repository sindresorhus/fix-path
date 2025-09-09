import process from 'node:process';
import {shellPathSync} from 'shell-path';
import stripAnsi from 'strip-ansi';

export default function fixPath() {
	if (process.platform === 'win32') {
		return;
	}

	const shellPath = shellPathSync();

	process.env.PATH = (shellPath ? stripAnsi(shellPath) : undefined) || [
		'./node_modules/.bin',
		'/.nodebrew/current/bin',
		'/usr/local/bin',
		process.env.PATH,
	].join(':');
}
