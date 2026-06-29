<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<main>
	<div class="content">
		<h1>{$t.aboutMe}</h1>
		<div class="divider"></div>
		<p class="placeholder">More coming soon.</p>
	</div>
</main>

<style>
	main {
		min-height: 100dvh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5rem 1.5rem 2rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		max-width: 420px;
		width: 100%;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-1);
		margin: 0;
	}

	.divider {
		width: 3rem;
		height: 1.5px;
		background: var(--color-3);
	}

	.placeholder {
		font-size: 0.95rem;
		color: var(--color-2);
		letter-spacing: 0.03em;
		margin: 0;
	}
</style>
