<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { lang, t } from '$lib/i18n';

	let { children } = $props();

	let menuOpen = $state(false);
	let hinted = $state(false);

	function openMenu() {
		menuOpen = !menuOpen;
		hinted = true;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap" rel="stylesheet" />
</svelte:head>

<header>
	<button
		class="lang-toggle"
		onclick={() => lang.update((l) => (l === 'en' ? 'zh' : 'en'))}
	>
		{#if $lang === 'en'}中文{:else}English{/if}
	</button>

	<div class="menu-wrap">
		{#if !hinted}
			<div class="doodle">
				<span class="doodle-text">click me</span>
				<svg width="70" height="45" viewBox="0 0 55 35" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M 2 20 C 10 4 20 30 30 18 C 40 6 44 24 50 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
					<path d="M 44 12 L 51 18 L 44 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		{/if}
		<button class="menu-btn" onclick={openMenu} aria-label="Menu">
			{#if menuOpen}✕{:else}☰{/if}
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		class="menu-overlay"
		role="button"
		tabindex="0"
		onclick={() => (menuOpen = false)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') menuOpen = false;
		}}
	>
		<nav>
			<a href="/">{$lang === 'en' ? 'Home' : '主页'}</a>
			<a href="/about">{$t.aboutMe}</a>
			<a href="/contact">{$t.contactMe}</a>
		</nav>
	</div>
{/if}

{@render children()}

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 1rem 1.25rem;
		z-index: 100;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.menu-wrap {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.doodle {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		color: var(--color-1);
		opacity: 1;
	}

	.doodle-text {
		font-family: 'Caveat', cursive;
		font-size: 1.5rem;
		line-height: 1;
		transform: rotate(-5deg);
		display: inline-block;
		font-weight: 600;
	}

	.lang-toggle,
	.menu-btn {
		background: transparent;
		border: 1.5px solid var(--color-3);
		border-radius: 999px;
		padding: 0.5rem 1.2rem;
		font-size: 1rem;
		cursor: pointer;
		letter-spacing: 0.05em;
		color: var(--color-1);
		transition: background 0.2s, border-color 0.2s;
	}

	.lang-toggle:hover,
	.menu-btn:hover {
		background: var(--color-4);
		border-color: var(--color-2);
	}

	.menu-overlay {
		position: fixed;
		inset: 0;
		z-index: 99;
		background: rgba(223, 232, 238, 0.97);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2.5rem;
	}

	.menu-overlay nav {
		display: contents;
	}

	.menu-overlay a {
		font-size: 1.8rem;
		text-decoration: none;
		letter-spacing: 0.05em;
		color: var(--color-1);
	}

	.menu-overlay a:hover {
		color: var(--color-2);
	}
</style>
