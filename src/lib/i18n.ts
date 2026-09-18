import { writable, derived } from 'svelte/store';

export type Lang = 'en' | 'zh';

export const lang = writable<Lang>('en');

const translations = {
	en: {
		name: 'Ting-Chen Chen',
		title: 'Cellist',
		intro: 'Ting-Chen Chen is a cellist and interdisciplinary artist whose work spans solo and chamber performance, studio recording, and cross-genre collaborations. Passionate about artistic innovation, she creates projects that connect music, culture, and storytelling while inspiring audiences through both performance and education.',
		home: 'Home',
		aboutMe: 'About Me',
		educator: 'Educator',
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

		edu: {
			eyebrow: 'Teaching Philosophy',
			headline: 'Music, woven into the fabric of life.',
			tagline: 'A space to listen, to discover, and to grow together through music.',

			valuesHeading: 'Core Values',
			values: [
				{
					title: 'A Strong Foundation',
					short: 'Rooted in thoughtful technique, clear understanding, and a listening ear.',
					long: 'Every musical journey begins with a foundation. I help students build healthy technique, clear musical understanding, and confidence in their instrument—so they can let the cello truly sing.',
				},
				{
					title: 'Growing Through Music',
					short: 'Learning discipline, finding confidence, and becoming more fully ourselves.',
					long: 'Music teaches us more than how to play an instrument. Through practice, patience, and discovery, students learn discipline, build confidence, and grow into themselves.',
				},
				{
					title: 'Finding Your Voice',
					short: 'Listening deeply, imagining freely, and expressing what words cannot.',
					long: 'Music gives us a way to express what words cannot. I encourage students to listen deeply, imagine freely, and discover their own way of making music.',
				},
				{
					title: 'Joy in Making Music',
					short: 'Finding connection, fulfillment, and joy in the music we create.',
					long: 'There is something special about the moment we truly connect with the music we make. Whatever their goals, I hope students can find joy, connection, and a sense of fulfillment in playing the cello.',
				},
			],

			lessonsHeading: 'Lessons',
			lessonsIntro: 'I teach beginners, advanced students, and adults.',
			lessons: [
				{
					title: 'Private Cello Lessons',
					level: 'All levels',
					lead: 'Lessons are tailored to each student and may include:',
					items: [
						'Posture & healthy technique',
						'Bow technique & tone production',
						'Intonation',
						'Scales & technical exercises',
						'Repertoire',
						'Sight-reading',
						'Music theory & ear training',
						'Performance preparation',
						'Effective practice strategies',
					],
				},
				{
					title: 'Cello Ensembles',
					level: 'For students with basic technique and sight-reading skills',
					lead: 'Explore the art of making music together through:',
					items: [
						'Ensemble skills',
						'Listening & collaboration',
						'Tone blending & balance',
						'Musical understanding',
						'Musical expression',
					],
				},
			],

			ctaHeading: 'Interested in lessons?',
			ctaBody: 'Get in touch to ask about availability or arrange a trial lesson.',
			ctaButton: 'Contact Me',
		},
	},
	zh: {
		name: '陳婷辰',
		title: '大提琴演奏家',
		intro: '陳婷辰是一位大提琴家與跨領域藝術家，其創作涵蓋獨奏與室內樂演出、錄音室錄音及跨界合作。她熱衷於藝術創新，致力打造結合音樂、文化與故事的計畫，並透過演出與教育啟發聽眾。',
		home: '主頁',
		aboutMe: '關於我',
		educator: '教學',
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

		edu: {
			eyebrow: '教學理念',
			headline: '音樂，交織於生活之中。',
			tagline: '在音樂裡聆聽、探索、玩樂，並一同成長。',

			valuesHeading: '核心價值',
			values: [
				{
					title: '扎實的基礎',
					short: '建立於扎實的技巧、清晰的理解，以及善於聆聽的耳朵。',
					long: '每一段音樂旅程，都從扎實的基礎開始。我重視正確的技巧、清楚的音樂概念，以及對樂器的理解，讓學生能自在地運用大提琴，發出屬於自己的聲音。',
				},
				{
					title: '在音樂中成長',
					short: '學習自律、建立自信，也在音樂中慢慢成為自己。',
					long: '音樂教會我們的，不只是如何演奏。在練習、等待與探索的過程裡，學生學習自律、建立自信，也慢慢成為更完整的自己。',
				},
				{
					title: '找到自己的聲音',
					short: '深深聆聽、自由想像，表達言語無法說出的情感。',
					long: '音樂讓我們表達那些言語無法說出的情感。我鼓勵學生聆聽、想像與探索，在音樂裡慢慢找到屬於自己的聲音。',
				},
				{
					title: '享受創造音樂的快樂',
					short: '在自己創造的音樂裡，找到連結、成就與喜悅。',
					long: '當我們真正與自己創造的音樂產生連結，那一刻總有一種特別的喜悅。不論學習的目標是什麼，我希望學生都能在拉琴的過程裡找到快樂、共鳴與成就感。',
				},
			],

			lessonsHeading: '課程',
			lessonsIntro: '教學對象包含初學者、進階學生與成人。',
			lessons: [
				{
					title: '私人大提琴課',
					level: '適合各程度',
					lead: '課程將依照每位學生的程度、需求與學習目標調整，內容可能包含：',
					items: [
						'演奏姿勢與正確技巧',
						'弓法與音色',
						'音準',
						'音階與技巧練習',
						'曲目學習',
						'視譜',
						'樂理與聽覺訓練',
						'演出準備',
						'有效的練習方法',
					],
				},
				{
					title: '大提琴合奏',
					level: '適合具備基礎技巧與視譜能力的學生',
					lead: '一同探索合奏的藝術：',
					items: [
						'合奏技巧',
						'聆聽與合作',
						'音色融合與平衡',
						'音樂理解',
						'音樂表現力',
					],
				},
			],

			ctaHeading: '有興趣上課嗎？',
			ctaBody: '歡迎與我聯繫，詢問時段或安排體驗課。',
			ctaButton: '聯繫我',
		},
	},
} as const;

export const t = derived(lang, ($lang) => translations[$lang]);
