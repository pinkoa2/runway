<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<main>
	<div class="photo-side">
		<img src="/portrait.jpg" alt="portrait" />
	</div>

	<div class="bio-side">
		<div class="bio-content">
			<h1 class="name">{$t.name}</h1>
			<p class="title">{$t.title}</p>
			<p class="intro">{$t.intro}</p>

			<nav>
				<a href="/about" class="btn">{$t.aboutMe}</a>
				<a href="/contact" class="btn">{$t.contactMe}</a>
			</nav>
		</div>
	</div>
</main>

<style>
	main {
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
	}

	/* --- Photo --- */
	.photo-side {
		width: 100%;
		aspect-ratio: 3 / 4;
		overflow: hidden;
		flex-shrink: 0;
	}

	.photo-side img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		display: block;
	}

	/* --- Bio --- */
	.bio-side {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2.5rem 1.5rem;
		box-sizing: border-box;
	}

	.bio-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 420px;
		width: 100%;
	}

	.name {
		font-size: 2rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.02em;
		color: var(--color-1);
	}

	.title {
		font-size: 0.9rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin: 0;
		color: var(--color-2);
	}

	.intro {
		font-size: 0.95rem;
		line-height: 1.7;
		margin: 0;
		color: #2a3e4c;
		padding-top: 0.25rem;
		border-top: 1px solid var(--color-4);
	}

	nav {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 0.5rem;
	}

	.btn {
		display: block;
		padding: 0.75rem 1.5rem;
		border: 1.5px solid var(--color-2);
		border-radius: 999px;
		text-decoration: none;
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-align: center;
		color: var(--color-1);
		transition: background 0.2s, border-color 0.2s;
	}

	.btn:hover {
		background: var(--color-4);
		border-color: var(--color-1);
	}

	/* --- Desktop: side by side --- */
	@media (min-width: 768px) {
		main {
			flex-direction: row;
			padding: 1.5rem 0 1.5rem 1.5rem;
		}

		.photo-side {
			width: 50%;
			height: calc(100dvh - 3rem);
			max-height: none;
			position: sticky;
			top: 1.5rem;
			border-radius: 12px;
		}

		.bio-side {
			width: 50%;
			padding: 4rem 3rem;
		}

		.name {
			font-size: 2.8rem;
		}

		nav {
			flex-direction: row;
		}

		.btn {
			width: auto;
		}
	}
</style>
