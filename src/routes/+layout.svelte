<script lang="ts">
	import '../app.scss';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FloatingElements from '$lib/components/FloatingElements.svelte';
	import ScrollAnimations from '$lib/components/ScrollAnimations.svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	function handleNewsletterSubscribed(event) {
		console.log('Newsletter subscribed:', event.detail);
	}
</script>

{#if mounted}
	<FloatingElements />
	<ScrollAnimations />
{/if}

<Header />

<main>
	<slot />
</main>

<Footer on:newsletter-subscribed={handleNewsletterSubscribed} />

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
	}
	
	main {
		min-height: 100vh;
	}
</style>
