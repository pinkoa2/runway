<script lang="ts">
	import { t } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { initForm } from '@formspree/ajax';

	let formEl: HTMLFormElement;

	onMount(() => {
		const handle = initForm({
			formElement: formEl,
			formId: 'mdarjleg',
			useDefaultStyles: false,
		});

		return () => handle.destroy();
	});
</script>

<main>
	<div class="content">
		<h1>{$t.contactMe}</h1>

		<div class="socials">
			<a href="https://instagram.com/tingzhen0518" target="_blank" rel="noopener">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
					<circle cx="12" cy="12" r="4"/>
					<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
				</svg>
				<span>@tingzhen0518</span>
			</a>
			<a href="mailto:tingcellostudio@gmail.com">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
					<rect x="2" y="4" width="20" height="16" rx="2"/>
					<polyline points="2,4 12,13 22,4"/>
				</svg>
				<span>tingcellostudio@gmail.com</span>
			</a>
		</div>

		<form bind:this={formEl} action="https://formspree.io/f/mdarjleg" method="POST" class="contact-form">
			<label for="email">{$t.formEmail}</label>
			<input type="email" id="email" name="email" placeholder={$t.formEmailPlaceholder} required />

			<label for="message">{$t.formMessage}</label>
			<textarea id="message" name="message" rows="5" placeholder={$t.formMessagePlaceholder} required></textarea>

			<button type="submit">{$t.formSend}</button>

			<p data-fs-success>{$t.formSuccess}</p>
			<p data-fs-error>{$t.formError}</p>
		</form>
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
		gap: 2rem;
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

	.socials {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.socials a {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: var(--color-1);
		font-size: 0.95rem;
		letter-spacing: 0.03em;
		transition: color 0.2s;
	}

	.socials a:hover {
		color: var(--color-2);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.contact-form label {
		font-size: 0.85rem;
		letter-spacing: 0.03em;
		color: var(--color-1);
		margin-top: 0.75rem;
	}

	.contact-form input,
	.contact-form textarea {
		font-family: inherit;
		font-size: 1rem;
		padding: 0.6rem 0.75rem;
		border: 1px solid var(--color-3);
		border-radius: 8px;
		background: #fff;
		color: #1a2a35;
		resize: vertical;
	}

	.contact-form input:focus,
	.contact-form textarea:focus {
		outline: none;
		border-color: var(--color-1);
	}

	.contact-form button {
		margin-top: 1rem;
		align-self: flex-start;
		padding: 0.65rem 1.75rem;
		border: 1px solid var(--color-3);
		border-radius: 999px;
		background: var(--color-5);
		color: var(--color-1);
		font-family: inherit;
		font-size: 0.95rem;
		letter-spacing: 0.03em;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.contact-form button:hover {
		background: var(--color-4);
	}

	.contact-form [data-fs-success],
	.contact-form [data-fs-error] {
		margin-top: 0.5rem;
		font-size: 0.9rem;
	}

	.contact-form [data-fs-success]:not([data-fs-active]),
	.contact-form [data-fs-error]:not([data-fs-active]) {
		display: none;
	}

	.contact-form [data-fs-success] {
		color: var(--color-1);
	}

	.contact-form [data-fs-error] {
		color: #b3413e;
	}

	@media (min-width: 768px) {
		.content {
			max-width: 520px;
			gap: 2.5rem;
			padding: 3rem 3.5rem;
			background: #fff;
			border: 1px solid var(--color-3);
			border-radius: 16px;
			box-shadow: 0 4px 24px rgba(93, 138, 168, 0.12);
		}

		h1 {
			font-size: 2.5rem;
		}

		.socials {
			gap: 1.5rem;
		}

		.socials a {
			font-size: 1.1rem;
		}

		.contact-form {
			gap: 0.75rem;
		}

		.contact-form label {
			font-size: 0.95rem;
		}

		.contact-form input,
		.contact-form textarea {
			font-size: 1.1rem;
			padding: 0.75rem 0.9rem;
		}

		.contact-form button {
			font-size: 1.05rem;
			padding: 0.8rem 2.25rem;
		}

		.contact-form [data-fs-success],
		.contact-form [data-fs-error] {
			font-size: 1rem;
		}
	}
</style>
