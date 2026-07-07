import { writable, derived } from 'svelte/store';

export type Lang = 'en' | 'zh';

export const lang = writable<Lang>('en');

const translations = {
	en: {
		name: 'Ting-Chen Chen',
		title: 'Cellist',
		intro: 'Ting-Chen Chen is a cellist and interdisciplinary artist whose work spans solo and chamber performance, studio recording, and cross-genre collaborations. Passionate about artistic innovation, she creates projects that connect music, culture, and storytelling while inspiring audiences through both performance and education.',
		aboutMe: 'About Me',
		contactMe: 'Contact Me',
		formEmail: 'Email',
		formEmailPlaceholder: 'your@email.com',
		formMessage: 'Message',
		formMessagePlaceholder: 'Say hello...',
		formSend: 'Send',
		formSending: 'Sending...',
		formSuccess: "Thanks! Your message has been sent.",
		formError: 'Something went wrong. Please try again or email me directly.',
		scanToVisit: 'Scan to visit',
		qrCode: 'QR Code',
	},
	zh: {
		name: '陳婷辰',
		title: '大提琴演奏家',
		intro: '陳婷辰是一位大提琴家與跨領域藝術家，其創作涵蓋獨奏與室內樂演出、錄音室錄音及跨界合作。她熱衷於藝術創新，致力打造結合音樂、文化與故事的計畫，並透過演出與教育啟發聽眾。',
		aboutMe: '關於我',
		contactMe: '聯繫我',
		formEmail: '電子郵件',
		formEmailPlaceholder: 'you@email.com',
		formMessage: '留言',
		formMessagePlaceholder: '想說的話...',
		formSend: '送出',
		formSending: '傳送中...',
		formSuccess: '謝謝！您的訊息已送出。',
		formError: '發生錯誤，請再試一次或直接寄信給我。',
		scanToVisit: '掃描造訪網站',
		qrCode: 'QR Code',
	},
} as const;

export const t = derived(lang, ($lang) => translations[$lang]);
