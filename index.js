import process from 'node:process';
import {shellPathSync} from 'shell-path';

export default function fixPath() {
	if (process.platform !== 'darwin') {
		return;
	}

	process.env.PATH = shellPathSync() || [
		'./node_modules/.bin',
		'/.nodebrew/current/bin',
		'/usr/local/bin',
		process.env.PATH,
	].join(':');
}
