<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	
	const dispatch = createEventDispatcher();
	
	let formData = {
		fullName: '',
		email: '',
		phone: '',
		company: '',
		planType: '',
		fleetSize: '',
		message: ''
	};
	
	let isSubmitting = false;
	let submitMessage = '';
	let submitStatus: 'success' | 'error' | '' = '';
	
	let contactMethods = [
		{
			icon: 'fas fa-phone',
			title: 'Call Us Directly',
			detail: '+263 777 233 814',
			subtitle: 'Available Mon-Fri, 8AM-5PM'
		},
		{
			icon: 'fas fa-envelope',
			title: 'Email Support',
			detail: 'info@omnilogistics.co.zw',
			subtitle: 'We respond within 24 hours'
		},
		{
			icon: 'fas fa-map-marker-alt',
			title: 'Visit Our Office',
			detail: '1, Emerald Drive, Redcliff',
			subtitle: 'Kwekwe, Zimbabwe'
		}
	];
	
	async function handleSubmit() {
		if (!formData.fullName || !formData.email || !formData.message) {
			showNotification('Please fill in all required fields (Name, Email, Message)', 'error');
			return;
		}
		
		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			showNotification('Please enter a valid email address', 'error');
			return;
		}
		
		isSubmitting = true;
		
		try {
			// Use SvelteKit API route for both development and production
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
			}
			
			const result = await response.json();
			
			if (result.success) {
				// Dispatch event to parent component
				dispatch('contact-submit', { formData, success: true });
				
				showNotification('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.', 'success');
				
				// Reset form
				formData = {
					fullName: '',
					email: '',
					phone: '',
					company: '',
					planType: '',
					fleetSize: '',
					message: ''
				};
			} else {
				throw new Error(result.message || 'Failed to send message');
			}
		} catch (error) {
			console.error('Contact form error:', error);
			dispatch('contact-submit', { formData, success: false, error: error.message });
			
			// Show user-friendly error message
			const errorMessage = error.message.includes('Failed to fetch') 
				? 'Unable to connect to the server. Please check your internet connection and try again.'
				: error.message || 'Sorry, there was an error sending your message. Please try again.';
			
			showNotification(errorMessage, 'error');
		} finally {
			isSubmitting = false;
		}
	}
	
	function showNotification(message: string, status: 'success' | 'error') {
		submitMessage = message;
		submitStatus = status;
		
		// Auto-hide after 8 seconds
		setTimeout(() => {
			submitMessage = '';
			submitStatus = '';
		}, 8000);
		
		// Scroll to the contact section to show notification
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<section id="contact" class="contact-section">
	<div class="contact-container">
		<!-- Background Pattern -->
		<div class="contact-bg-pattern">
			<div class="pattern-element pattern-1"></div>
			<div class="pattern-element pattern-2"></div>
			<div class="pattern-element pattern-3"></div>
		</div>
		
		<!-- Section Header -->
		<div class="contact-header">
			<div class="contact-badge">
				<i class="fas fa-headset"></i>
				<span>Get In Touch</span>
			</div>
			<h2 class="contact-title">
				Ready to Transform Your <span class="gradient-text">Fleet Management</span>?
			</h2>
			<p class="contact-subtitle">
				Join hundreds of satisfied customers across Zimbabwe who trust Omni Logistics for their vehicle tracking needs
			</p>
		</div>

		<!-- Contact Content Grid -->
		<div class="contact-grid">
			<!-- Contact Information -->
			<div class="contact-info-card">
				<div class="info-header">
					<h3>Let's Start Your Journey</h3>
					<p>Connect with our expert team to discover the perfect solution for your needs</p>
				</div>
				
				<!-- Contact Methods -->
				<div class="contact-methods">
					{#each contactMethods as method}
						<div class="contact-method">
							<div class="method-icon">
								<i class={method.icon}></i>
							</div>
							<div class="method-content">
								<h4>{method.title}</h4>
								<p>{method.detail}</p>
								<small>{method.subtitle}</small>
							</div>
						</div>
					{/each}
				</div>

				<!-- Quick Actions -->
				<div class="quick-actions">
					<h4>Quick Actions</h4>
					<div class="action-buttons">
						<button class="action-btn primary">
							<i class="fas fa-rocket"></i>
							<span>Get Started</span>
						</button>
						<button class="action-btn secondary">
							<i class="fas fa-calendar"></i>
							<span>Schedule Demo</span>
						</button>
					</div>
				</div>

				<!-- Service Information -->
				<div class="service-info">
					<div class="service-badge">
						<i class="fas fa-tools"></i>
						<span>Professional Installation</span>
					</div>
					<p>All plans include professional hardware installation and setup by our certified technicians</p>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="contact-form-card">
				<div class="form-header">
					<h3>Send Us a Message</h3>
					<p>Tell us about your requirements and we'll get back to you within 24 hours</p>
				</div>
				
				<form class="modern-contact-form" on:submit|preventDefault={handleSubmit}>
					<div class="form-grid">
						<div class="form-field">
							<label for="fullName">Full Name *</label>
							<input 
								type="text" 
								id="fullName" 
								bind:value={formData.fullName}
								required
							>
							<div class="field-border"></div>
						</div>
						
						<div class="form-field">
							<label for="email">Email Address *</label>
							<input 
								type="email" 
								id="email" 
								bind:value={formData.email}
								required
							>
							<div class="field-border"></div>
						</div>
						
						<div class="form-field">
							<label for="phone">Phone Number</label>
							<input 
								type="tel" 
								id="phone" 
								bind:value={formData.phone}
							>
							<div class="field-border"></div>
						</div>
						
						<div class="form-field">
							<label for="company">Company Name</label>
							<input 
								type="text" 
								id="company" 
								bind:value={formData.company}
							>
							<div class="field-border"></div>
						</div>
					</div>
					
					<div class="form-field full-width">
						<label for="planType">Interested Plan</label>
						<select id="planType" bind:value={formData.planType}>
							<option value="">Select a plan type</option>
							<optgroup label="Individual Plans">
								<option value="individual-Basic">Basic - Entry level tracking</option>
								<option value="individual-Standard">Standard - Advanced features</option>
								<option value="individual-Premium">Premium - Complete solution</option>
							</optgroup>
							<optgroup label="Enterprise Plans">
								<option value="business-Gold">Gold - Basic fleet management</option>
								<option value="business-Diamond">Diamond - Advanced optimization</option>
								<option value="business-Platinum">Platinum - Enterprise solution</option>
							</optgroup>
						</select>
						<div class="field-border"></div>
					</div>
					
					<div class="form-field full-width">
						<label for="fleetSize">Fleet Size (Optional)</label>
						<select id="fleetSize" bind:value={formData.fleetSize}>
							<option value="">Select fleet size</option>
							<option value="1">1 Vehicle</option>
							<option value="2-5">2-5 Vehicles</option>
							<option value="6-20">6-20 Vehicles</option>
							<option value="21-50">21-50 Vehicles</option>
							<option value="50+">50+ Vehicles</option>
						</select>
						<div class="field-border"></div>
					</div>
					
					<div class="form-field full-width">
						<label for="message">Tell us about your needs *</label>
						<textarea 
							id="message" 
							rows="4" 
							required 
							placeholder="Describe your tracking requirements, challenges, or questions..."
							bind:value={formData.message}
						></textarea>
						<div class="field-border"></div>
					</div>
					
					<div class="form-actions">
						<button type="submit" class="submit-btn" disabled={isSubmitting}>
							<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
							{#if !isSubmitting}
								<i class="fas fa-paper-plane"></i>
							{:else}
								<i class="fas fa-spinner fa-spin"></i>
							{/if}
							<div class="btn-ripple"></div>
						</button>
						<p class="form-note">
							<i class="fas fa-shield-check"></i>
							Your information is secure and will never be shared
						</p>
					</div>
				</form>
			</div>
		</div>

		<!-- Notification with backdrop -->
		{#if submitMessage}
			<div class="notification-backdrop">
				<div class="notification" class:success={submitStatus === 'success'} class:error={submitStatus === 'error'}>
					<div class="notification-content">
						<i class={submitStatus === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}></i>
						<span>{submitMessage}</span>
						<button class="notification-close" on:click={() => { submitMessage = ''; submitStatus = ''; }}>
							<i class="fas fa-times"></i>
						</button>
					</div>
				</div>
			</div>
		{/if}

		<!-- Bottom CTA -->
		<div class="contact-bottom-cta">
			<div class="cta-content">
				<div class="cta-stats">
					<div class="stat-item">
						<div class="stat-number">500+</div>
						<div class="stat-label">Active Vehicles</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">50+</div>
						<div class="stat-label">Happy Clients</div>
					</div>
					<div class="stat-item">
						<div class="stat-number">99.9%</div>
						<div class="stat-label">Uptime</div>
					</div>
				</div>
				<div class="cta-text">
					<h3>Join Our Growing Community</h3>
					<p>Experience the difference with Zimbabwe's leading fleet management solution</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.contact-section {
		background: linear-gradient(135deg, 
			rgba(15, 23, 42, 0.95) 0%, 
			rgba(30, 41, 59, 0.95) 50%,
			rgba(15, 23, 42, 0.95) 100%);
		padding: 6rem 0 4rem;
		position: relative;
		overflow: hidden;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: 
				radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
				radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
			pointer-events: none;
		}
	}
	
	.contact-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}
	
	.contact-bg-pattern {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		overflow: hidden;
	}
	
	.pattern-element {
		position: absolute;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		border-radius: 50%;
		opacity: 0.05;
		animation: float 6s ease-in-out infinite;
		
		&.pattern-1 {
			width: 100px;
			height: 100px;
			top: 10%;
			left: 10%;
			animation-delay: 0s;
		}
		
		&.pattern-2 {
			width: 150px;
			height: 150px;
			top: 60%;
			right: 15%;
			animation-delay: 2s;
		}
		
		&.pattern-3 {
			width: 80px;
			height: 80px;
			bottom: 20%;
			left: 60%;
			animation-delay: 4s;
		}
	}
	
	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(180deg); }
	}
	
	.contact-header {
		text-align: center;
		margin-bottom: 4rem;
	}
	
	.contact-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(59, 130, 246, 0.1);
		border: 1px solid rgba(59, 130, 246, 0.3);
		color: #3b82f6;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 2rem;
		backdrop-filter: blur(10px);
	}
	
	.contact-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 800;
		color: white;
		margin-bottom: 1.5rem;
		line-height: 1.2;
	}
	
	.gradient-text {
		background: linear-gradient(135deg, #3b82f6, #00bfff, #87ceeb);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.contact-subtitle {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}
	
	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 4rem;
	}
	
	.contact-info-card {
		background: rgba(15, 23, 42, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 24px;
		padding: 3rem;
		backdrop-filter: blur(20px);
		position: relative;
		overflow: hidden;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 4px;
			background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		}
	}
	
	.info-header {
		margin-bottom: 2.5rem;
		
		h3 {
			font-size: 1.75rem;
			font-weight: 700;
			color: white;
			margin-bottom: 1rem;
		}
		
		p {
			color: rgba(255, 255, 255, 0.8);
			line-height: 1.6;
		}
	}
	
	.contact-methods {
		margin-bottom: 3rem;
	}
	
	.contact-method {
		display: flex;
		align-items: flex-start;
		gap: 1.5rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		
		&:last-child {
			border-bottom: none;
		}
	}
	
	.method-icon {
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		color: white;
		flex-shrink: 0;
	}
	
	.method-content {
		h4 {
			font-size: 1.125rem;
			font-weight: 600;
			color: white;
			margin-bottom: 0.5rem;
		}
		
		p {
			color: #00bfff;
			font-weight: 500;
			margin-bottom: 0.25rem;
		}
		
		small {
			color: rgba(255, 255, 255, 0.6);
			font-size: 0.875rem;
		}
	}
	
	.quick-actions {
		margin-bottom: 3rem;
		
		h4 {
			font-size: 1.125rem;
			font-weight: 600;
			color: white;
			margin-bottom: 1rem;
		}
	}
	
	.action-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	
	.action-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		flex: 1;
		min-width: 140px;
		justify-content: center;
		
		&.primary {
			background: linear-gradient(135deg, #3b82f6, #1d4ed8);
			color: white;
			
			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
			}
		}
		
		&.secondary {
			background: rgba(255, 255, 255, 0.1);
			color: white;
			border: 1px solid rgba(255, 255, 255, 0.3);
			
			&:hover {
				background: rgba(255, 255, 255, 0.2);
			}
		}
	}
	
	.service-info {
		.service-badge {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			background: rgba(16, 185, 129, 0.1);
			color: #10b981;
			padding: 0.5rem 1rem;
			border-radius: 12px;
			font-size: 0.875rem;
			font-weight: 600;
			margin-bottom: 1rem;
			width: fit-content;
		}
		
		p {
			color: rgba(255, 255, 255, 0.8);
			line-height: 1.6;
			font-size: 0.95rem;
		}
	}
	
	.contact-form-card {
		background: rgba(15, 23, 42, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 24px;
		padding: 3rem;
		backdrop-filter: blur(20px);
		position: relative;
		overflow: hidden;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 4px;
			background: linear-gradient(135deg, #00bfff, #87ceeb);
		}
	}
	
	.form-header {
		margin-bottom: 2.5rem;
		
		h3 {
			font-size: 1.75rem;
			font-weight: 700;
			color: white;
			margin-bottom: 1rem;
		}
		
		p {
			color: rgba(255, 255, 255, 0.8);
			line-height: 1.6;
		}
	}
	
	.modern-contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
	}
	
	.form-field {
		position: relative;
		display: flex;
		flex-direction: column;
		
		&.full-width {
			grid-column: 1 / -1;
		}
		
		label {
			font-size: 0.875rem;
			font-weight: 600;
			color: rgba(255, 255, 255, 0.8);
			margin-bottom: 0.5rem;
		}
		
		input, select, textarea {
			background: rgba(255, 255, 255, 0.05);
			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 12px;
			padding: 1rem 1.25rem;
			color: white;
			font-size: 1rem;
			transition: all 0.3s ease;
			
			&:focus {
				outline: none;
				border-color: #3b82f6;
				background: rgba(255, 255, 255, 0.1);
				box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
			}
			
			&::placeholder {
				color: rgba(255, 255, 255, 0.5);
			}
		}
		
		textarea {
			resize: vertical;
			min-height: 120px;
		}
	}
	
	.field-border {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}
	
	.form-field:focus-within .field-border {
		transform: scaleX(1);
	}
	
	.form-actions {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	
	.submit-btn {
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		border: none;
		border-radius: 16px;
		padding: 1.25rem 2.5rem;
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		position: relative;
		overflow: hidden;
		min-width: 200px;
		justify-content: center;
		
		&:hover:not(:disabled) {
			transform: translateY(-2px);
			box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
		}
		
		&:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}
	}
	
	.btn-ripple {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(255, 255, 255, 0.2);
		transform: scale(0);
		border-radius: inherit;
		transition: transform 0.3s ease;
	}
	
	.submit-btn:active .btn-ripple {
		transform: scale(1);
	}
	
	.form-note {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.875rem;
		text-align: center;
		
		i {
			color: #10b981;
		}
	}
	
	.notification-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(4px);
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeIn 0.3s ease;
	}
	
	.notification {
		background: rgba(15, 23, 42, 0.98);
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 2rem;
		backdrop-filter: blur(20px);
		min-width: 400px;
		max-width: 500px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
		animation: slideInCenter 0.4s ease;
		
		&.success {
			border-color: rgba(16, 185, 129, 0.5);
			background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(15, 23, 42, 0.98));
		}
		
		&.error {
			border-color: rgba(239, 68, 68, 0.5);
			background: linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.98));
		}
	}
	
	.notification-content {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: white;
		
		i:first-child {
			font-size: 1.25rem;
		}
		
		.success & i:first-child {
			color: #10b981;
		}
		
		.error & i:first-child {
			color: #ef4444;
		}
	}
	
	.notification-close {
		background: none;
		border: none;
		color: rgba(255, 255, 255, 0.7);
		cursor: pointer;
		padding: 0.25rem;
		margin-left: auto;
		
		&:hover {
			color: white;
		}
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	@keyframes slideInCenter {
		from {
			transform: scale(0.8);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
	
	@keyframes slideInRight {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
	
	.contact-bottom-cta {
		background: rgba(59, 130, 246, 0.05);
		border: 1px solid rgba(59, 130, 246, 0.2);
		border-radius: 24px;
		padding: 3rem;
		backdrop-filter: blur(10px);
	}
	
	.cta-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 3rem;
	}
	
	.cta-stats {
		display: flex;
		gap: 3rem;
	}
	
	.stat-item {
		text-align: center;
	}
	
	.stat-number {
		font-size: 2.5rem;
		font-weight: 800;
		color: #00bfff;
		display: block;
		line-height: 1;
	}
	
	.stat-label {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.8);
		margin-top: 0.5rem;
	}
	
	.cta-text {
		h3 {
			font-size: 1.5rem;
			font-weight: 700;
			color: white;
			margin-bottom: 0.5rem;
		}
		
		p {
			color: rgba(255, 255, 255, 0.8);
			line-height: 1.6;
		}
	}
	
	@media (max-width: 768px) {
		.contact-container {
			padding: 0 1rem;
		}
		
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.contact-info-card,
		.contact-form-card {
			padding: 2rem;
		}
		
		.form-grid {
			grid-template-columns: 1fr;
		}
		
		.action-buttons {
			flex-direction: column;
		}
		
		.action-btn {
			min-width: auto;
		}
		
		.cta-content {
			flex-direction: column;
			text-align: center;
			gap: 2rem;
		}
		
		.cta-stats {
			justify-content: center;
			gap: 2rem;
		}
		
		.notification {
			min-width: 300px;
			max-width: 90vw;
			margin: 1rem;
		}
	}
</style>
