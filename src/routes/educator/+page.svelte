<script lang="ts">
	import { t } from '$lib/i18n';

	// Index of the open core-value card; only one open at a time.
	let open = $state<number | null>(null);

	function toggle(i: number) {
		open = open === i ? null : i;
	}
</script>

<!-- Banner: one teaching photo, full width, above the content column -->
<figure class="banner">
	<img src="/teaching.jpg" alt={$t.edu.photoAlt} />
</figure>

<main>
	<!-- Philosophy -->
	<section class="hero">
		<p class="eyebrow">{$t.edu.eyebrow}</p>
		<h1>{$t.edu.headline}</h1>
		<div class="divider"></div>
		<p class="tagline">{$t.edu.tagline}</p>
	</section>

	<!-- Core values: short on the card, tap to reveal long -->
	<section>
		<h2>{$t.edu.valuesHeading}</h2>
		<div class="values">
			{#each $t.edu.values as v, i}
				<button
					class="card"
					class:open={open === i}
					onclick={() => toggle(i)}
					aria-expanded={open === i}
					aria-controls="value-{i}"
				>
					<span class="card-head">
						<span class="num">0{i + 1}</span>
						<span class="chevron" aria-hidden="true"></span>
					</span>
					<span class="card-title">{v.title}</span>
					<span class="card-short">{v.short}</span>
					<span class="card-long" id="value-{i}">
						<span class="card-long-inner">{v.long}</span>
					</span>
				</button>
			{/each}
		</div>
	</section>

	<!-- Lessons -->
	<section>
		<h2>{$t.edu.lessonsHeading}</h2>
		<p class="lessons-intro">{$t.edu.lessonsIntro}</p>
		<div class="lessons">
			{#each $t.edu.lessons as l}
				<article class="lesson">
					<h3>{l.title}</h3>
					<p class="level">{l.level}</p>
					<p class="lead">{l.lead}</p>
					<ul>
						{#each l.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</section>

	<!-- CTA -->
	<section class="cta">
		<h2>{$t.edu.ctaHeading}</h2>
		<p>{$t.edu.ctaBody}</p>
		<a href="/contact" class="btn">{$t.edu.ctaButton}</a>
	</section>
</main>

<style>
	/* --- Banner --- */
	.banner {
		width: 100%;
		aspect-ratio: 2 / 1;
		overflow: hidden;
	}

	.banner img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
	}

	main {
		max-width: 640px;
		margin: 0 auto;
		padding: 3rem 1.5rem 4rem;
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	section {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	h2 {
		font-size: 0.85rem;
		font-weight: 400;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-2);
	}

	.divider {
		width: 3rem;
		height: 1.5px;
		background: var(--color-3);
	}

	/* --- Hero --- */
	.hero {
		gap: 1rem;
	}

	.eyebrow {
		font-size: 0.85rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--color-2);
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: var(--color-1);
	}

	.tagline {
		font-size: 1.1rem;
		line-height: 1.7;
		color: var(--text-soft);
	}

	/* --- Core values --- */
	.values {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1.5rem;
		text-align: left;
		font-family: inherit;
		color: inherit;
		background: #fff;
		border: 1px solid var(--color-3);
		border-radius: 16px;
		cursor: pointer;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	.card:hover,
	.card.open {
		border-color: var(--color-1);
		box-shadow: 0 4px 24px rgba(93, 138, 168, 0.12);
	}

	.card:focus-visible {
		outline: 2px solid var(--color-1);
		outline-offset: 2px;
	}

	.card-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.num {
		font-size: 0.85rem;
		letter-spacing: 0.15em;
		color: var(--color-2);
	}

	.chevron {
		width: 0.6rem;
		height: 0.6rem;
		border-right: 1.5px solid var(--color-2);
		border-bottom: 1.5px solid var(--color-2);
		transform: rotate(45deg);
		transition: transform 0.3s;
		margin-right: 0.2rem;
	}

	.open .chevron {
		transform: rotate(-135deg);
	}

	.card-title {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-1);
	}

	.card-short {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-soft);
	}

	/* Expand via grid-rows so height animates without JS measuring. */
	.card-long {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.35s ease;
	}

	.open .card-long {
		grid-template-rows: 1fr;
	}

	.card-long-inner {
		overflow: hidden;
		font-size: 1rem;
		line-height: 1.7;
		color: var(--text-soft);
	}

	.open .card-long-inner {
		padding-top: 0.75rem;
		margin-top: 0.5rem;
		border-top: 1px solid var(--color-4);
	}

	/* --- Lessons --- */
	.lessons-intro {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--text-soft);
	}

	.lessons {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}

	.lesson {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	h3 {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--color-1);
	}

	.level {
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		color: var(--color-2);
	}

	.lead {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-soft);
		margin-top: 0.5rem;
	}

	.lesson ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-top: 0.25rem;
	}

	.lesson li {
		padding-left: 1.4rem;
		position: relative;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-soft);
	}

	/* Small tinted note glyphs as bullets, cycling through four shapes. */
	.lesson li::before {
		content: '♪';
		position: absolute;
		left: 0;
		top: 0;
		font-size: 0.9em;
		color: var(--color-2);
	}

	.lesson li:nth-child(4n + 2)::before {
		content: '♫';
	}

	.lesson li:nth-child(4n + 3)::before {
		content: '♩';
	}

	.lesson li:nth-child(4n + 4)::before {
		content: '♬';
	}

	/* --- CTA --- */
	.cta {
		align-items: flex-start;
		gap: 0.75rem;
		padding-top: 2.5rem;
		border-top: 1px solid var(--color-4);
	}

	.cta h2 {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		text-transform: none;
		color: var(--color-1);
	}

	.cta p {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-soft);
	}

	.cta .btn {
		margin-top: 0.75rem;
	}

	/* --- Desktop --- */
	@media (min-width: 768px) {
		/* Inset with rounded corners, like the home page photo. */
		/* Same width as the content column so it reads as part of the page. */
		.banner {
			width: calc(100% - 6rem);
			max-width: 764px;
			margin: 6rem auto 0;
			aspect-ratio: 5 / 2;
			border-radius: 12px;
			box-shadow: 0 4px 24px rgba(93, 138, 168, 0.12);
		}

		main {
			max-width: 860px;
			padding: 3.5rem 3rem 6rem;
			gap: 5rem;
		}

		h1 {
			font-size: 3rem;
		}

		.tagline {
			font-size: 1.25rem;
			max-width: 36rem;
		}

		.values {
			grid-template-columns: 1fr 1fr;
			gap: 1.25rem;
		}

		.card {
			padding: 2rem;
		}

		.lessons-intro {
			font-size: 1.2rem;
		}

		.lessons {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			margin-top: 0.5rem;
		}

		.cta h2 {
			font-size: 1.85rem;
		}
	}
</style>
