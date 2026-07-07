import { writeFileSync } from 'node:fs';
import QRCode from 'qrcode';

const svg = await QRCode.toString('https://tingcellostudio.org', {
	type: 'svg',
	margin: 1,
	color: {
		dark: '#5d8aa8',
		light: '#0000',
	},
});

writeFileSync(new URL('../static/qr-code.svg', import.meta.url), svg);
console.log('Wrote static/qr-code.svg');
