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
	},
	zh: {
		name: '陳婷辰',
		title: '大提琴演奏家',
		intro: '陳婷辰是一位大提琴家與跨領域藝術家，其創作涵蓋獨奏與室內樂演出、錄音室錄音及跨界合作。她熱衷於藝術創新，致力打造結合音樂、文化與故事的計畫，並透過演出與教育啟發聽眾。',
		aboutMe: '关于我',
		contactMe: '联系我',
	},
} as const;

export const t = derived(lang, ($lang) => translations[$lang]);
