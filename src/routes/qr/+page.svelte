<script lang="ts">
	import { t } from '$lib/i18n';
</script>

<main>
	<div class="content">
		<img src="/qr-code.svg" alt="QR code linking to tingcellostudio.org" />
		<p>{$t.scanToVisit}</p>
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
		align-items: center;
		gap: 1.5rem;
	}

	img {
		width: min(60vw, 280px);
		height: min(60vw, 280px);
	}

	p {
		font-size: 1rem;
		letter-spacing: 0.05em;
		color: var(--color-1);
	}
</style>
