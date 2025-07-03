<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Features from '$lib/components/Features.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import FloatingElements from '$lib/components/FloatingElements.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	
	let currentUser = null;
	let showDashboard = false;
	
	function handleLogin(event) {
		currentUser = event.detail.user;
		showDashboard = true;
	}
	
	function handleLogout() {
		currentUser = null;
		showDashboard = false;
	}
	
	function handleContactSubmit(event) {
		console.log('Contact form submitted:', event.detail);
		
		// Enhanced logging and handling
		const { formData, success, error } = event.detail;
		
		if (success) {
			console.log('✅ Form submission successful:', {
				name: formData.fullName,
				email: formData.email,
				company: formData.company,
				planType: formData.planType,
				fleetSize: formData.fleetSize,
				messageLength: formData.message.length
			});
			
			// You could add additional success tracking here:
			// - Analytics events
			// - User feedback
			// - Redirect logic
			
		} else {
			console.log('❌ Form submission failed:', {
				error: error,
				formData: {
					name: formData.fullName,
					email: formData.email,
					company: formData.company
				}
			});
			
			// You could add additional error handling here:
			// - Error analytics
			// - Retry logic
			// - Alternative contact methods
		}
	}
</script>

<svelte:head>
	<title>Omni Logistics - Future of Fleet Intelligence</title>
	<meta name="description" content="Transform your fleet management with AI-powered insights and real-time vehicle tracking. Next-generation logistics solutions for modern businesses." />
</svelte:head>

{#if showDashboard}
	<Dashboard {currentUser} isVisible={showDashboard} on:logout={handleLogout} />
{:else}
	<main>
		<Hero />
		<Services />
		<Features />
		<Pricing />
		<Contact on:contact-submit={handleContactSubmit} />
	</main>
{/if}

<FloatingElements />
