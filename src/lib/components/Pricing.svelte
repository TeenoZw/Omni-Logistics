<script lang="ts">
	import { onMount } from 'svelte';
	
	let selectedPlanType: 'personal' | 'business' = 'personal';
	
	let personalPlans = [
		{
			name: 'Basic',
			icon: 'fas fa-route',
			description: 'Basic tracking for everyday use',
			features: [
				{ name: 'Real-time GPS tracking', included: true },
				{ name: 'Trip history viewing', included: true },
				{ name: 'Basic geofencing', included: true },
				{ name: 'Ignition alerts', included: true },
				{ name: 'Multi-vehicle tracking', included: false },
				{ name: 'Advanced reports', included: false }
			],
			action: 'Get Started'
		},
		{
			name: 'Standard',
			icon: 'fas fa-shield-alt',
			description: 'Advanced features for power users',
			badge: 'Most Popular',
			badgeIcon: 'fas fa-star',
			featured: true,
			features: [
				{ name: 'Multi-vehicle tracking', included: true },
				{ name: 'Trip history playback', included: true },
				{ name: 'Data export capabilities', included: true },
				{ name: 'Basic reporting suite', included: true },
				{ name: 'Device tamper alerts', included: true }
			],
			action: 'Get Started'
		},
		{
			name: 'Premium',
			icon: 'fas fa-crown',
			description: 'Complete solution with premium features',
			features: [
				{ name: 'Everything in Standard, plus:', included: true },
				{ name: 'Advanced geofencing options', included: true },
				{ name: 'Comprehensive analytics', included: true },
				{ name: 'Priority customer support', included: true },
				{ name: 'Custom alert configurations', included: true }
			],
			action: 'Contact Sales'
		}
	];
	
	let businessPlans = [
		{
			name: 'Gold',
			icon: 'fas fa-truck',
			description: 'Basic fleet management',
			features: [
				{ name: 'Unlimited vehicles', included: true },
				{ name: 'Real-time fleet tracking', included: true },
				{ name: 'Trip history & playback', included: true },
				{ name: 'Basic geofencing', included: true },
				{ name: 'Standard reporting', included: true },
				{ name: 'Multi-user access', included: true }
			],
			action: 'Contact Sales'
		},
		{
			name: 'Diamond',
			icon: 'fas fa-chart-line',
			description: 'Advanced fleet optimization',
			badge: 'Best Value',
			badgeIcon: 'fas fa-fire',
			featured: true,
			features: [
				{ name: 'Everything in Gold, plus:', included: true },
				{ name: 'Advanced geofencing', included: true },
				{ name: 'Driver behavior monitoring', included: true },
				{ name: 'Maintenance scheduling', included: true },
				{ name: 'Fuel consumption tracking', included: true },
				{ name: 'Advanced analytics dashboard', included: true }
			],
			action: 'Contact Sales'
		},
		{
			name: 'Platinum',
			icon: 'fas fa-crown',
			description: 'Enterprise-grade solution',
			features: [
				{ name: 'Everything in Diamond, plus:', included: true },
				{ name: 'Custom behavior rules', included: true },
				{ name: 'Advanced user management', included: true },
				{ name: 'Maintenance CRUD operations', included: true },
				{ name: 'Custom report scheduling', included: true },
				{ name: 'Remote vehicle control', included: true },
				{ name: 'Premium support & training', included: true }
			],
			action: 'Contact Sales'
		}
	];
	
	$: currentPlans = selectedPlanType === 'personal' ? personalPlans : businessPlans;
	
	function switchPlanType(type: 'personal' | 'business') {
		selectedPlanType = type;
	}
</script>

<section id="pricing" class="pricing-section">
	<div class="pricing-container">
		<!-- Section Header -->
		<div class="pricing-header">
			<div class="pricing-badge">
				<i class="fas fa-sparkles"></i>
				<span>Flexible Plans</span>
			</div>
			<h2 class="pricing-title">
				Choose Your <span class="gradient-text">Perfect Plan</span>
			</h2>
			<p class="pricing-subtitle">
				Tailored solutions for every need - from individual tracking to enterprise fleet management
			</p>
			
			<!-- Plan Type Toggle -->
			<div class="plan-type-switcher">
				<div class="switcher-container">
					<button 
						class="type-btn"
						class:active={selectedPlanType === 'personal'}
						on:click={() => switchPlanType('personal')}
					>
						<div class="btn-icon">
							<i class="fas fa-user"></i>
						</div>
						<div class="btn-content">
							<span class="btn-title">Individual</span>
							<span class="btn-subtitle">Up to 2 users</span>
						</div>
					</button>
					<button 
						class="type-btn"
						class:active={selectedPlanType === 'business'}
						on:click={() => switchPlanType('business')}
					>
						<div class="btn-icon">
							<i class="fas fa-building"></i>
						</div>
						<div class="btn-content">
							<span class="btn-title">Company</span>
							<span class="btn-subtitle">Multiple users</span>
						</div>
					</button>
				</div>
			</div>
		</div>

		<!-- Plans Section -->
		<div class="plans-section">
			<div class="plans-header">
				<h3 class="plans-category-title">
					{selectedPlanType === 'personal' ? 'Personal Vehicle Tracking' : 'Business Fleet Management'}
				</h3>
				<p class="plans-category-subtitle">
					{selectedPlanType === 'personal' 
						? 'Perfect for individuals and families with maximum 2 users per hub'
						: 'Comprehensive solutions for companies • Unlimited vehicles & users'
					}
				</p>
			</div>
			
			<div class="plans-grid">
				{#each currentPlans as plan}
					<div class="plan-card" class:featured={plan.featured}>
						{#if plan.badge}
							<div class="plan-badge">
								<i class={plan.badgeIcon}></i>
								<span>{plan.badge}</span>
							</div>
						{/if}
						
						<div class="plan-card-header">
							<div class="plan-icon">
								<i class={plan.icon}></i>
							</div>
							<h4 class="plan-name">{plan.name}</h4>
							<p class="plan-description">{plan.description}</p>
						</div>
						
						<div class="plan-features">
							<div class="feature-group">
								{#each plan.features as feature}
									<div class="feature-item" class:included={feature.included} class:excluded={!feature.included}>
										<i class={feature.included ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>
										<span>{feature.name}</span>
									</div>
								{/each}
							</div>
						</div>
						
						<div class="plan-action">
							<button class="plan-btn" class:primary={plan.featured}>
								<span>{plan.action}</span>
								<i class="fas fa-arrow-right"></i>
							</button>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Additional Info -->
		<div class="pricing-info">
			<div class="info-grid">
				<div class="info-card">
					<div class="info-icon">
						<i class="fas fa-shield-check"></i>
					</div>
					<h4>Hardware Compatibility</h4>
					<p>All security features require compatible hardware installation and proper wiring for optimal performance.</p>
				</div>
				
				<div class="info-card">
					<div class="info-icon">
						<i class="fas fa-cog"></i>
					</div>
					<h4>Easy Setup</h4>
					<p>Professional installation and configuration included with all plans. Our technicians ensure optimal performance.</p>
				</div>
				
				<div class="info-card">
					<div class="info-icon">
						<i class="fas fa-headset"></i>
					</div>
					<h4>24/7 Support</h4>
					<p>All plans include comprehensive customer support with priority assistance for business and enterprise users.</p>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="pricing-cta">
			<div class="cta-content">
				<h3>Ready to Transform Your Fleet Management?</h3>
				<p>Join hundreds of satisfied customers who trust Omni Logistics for their vehicle tracking needs.</p>
				<div class="cta-buttons">
					<button class="cta-btn primary">
						<span>Get Started Today</span>
						<i class="fas fa-rocket"></i>
					</button>
					<button class="cta-btn secondary">
						<i class="fas fa-phone"></i>
						<span>Talk to Sales</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.pricing-section {
		background: linear-gradient(135deg, 
			rgba(15, 23, 42, 0.95) 0%, 
			rgba(30, 41, 59, 0.95) 50%,
			rgba(15, 23, 42, 0.95) 100%);
		padding: 6rem 0;
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
	
	.pricing-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}
	
	.pricing-header {
		text-align: center;
		margin-bottom: 4rem;
	}
	
	.pricing-badge {
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
		
		i {
			color: #00bfff;
		}
	}
	
	.pricing-title {
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
	
	.pricing-subtitle {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto 3rem;
		line-height: 1.6;
	}
	
	.plan-type-switcher {
		display: flex;
		justify-content: center;
		margin-bottom: 4rem;
	}
	
	.switcher-container {
		background: rgba(15, 23, 42, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 20px;
		padding: 0.5rem;
		display: flex;
		gap: 0.5rem;
		backdrop-filter: blur(20px);
	}
	
	.type-btn {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: transparent;
		border: none;
		padding: 1rem 2rem;
		border-radius: 16px;
		color: rgba(255, 255, 255, 0.7);
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 200px;
		position: relative;
		
		&:hover {
			color: white;
			background: rgba(59, 130, 246, 0.05);
		}
		
		&.active {
			background: linear-gradient(135deg, #3b82f6, #1d4ed8);
			color: white;
			box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
		}
	}
	
	.btn-icon {
		font-size: 1.5rem;
		opacity: 0.8;
	}
	
	.type-btn.active .btn-icon {
		opacity: 1;
	}
	
	.btn-content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}
	
	.btn-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}
	
	.btn-subtitle {
		font-size: 0.875rem;
		opacity: 0.8;
	}
	
	.plans-section {
		opacity: 1;
		transform: translateY(0);
		transition: all 0.4s ease;
	}
	
	.plans-header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.plans-category-title {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}
	
	.plans-category-subtitle {
		color: rgba(255, 255, 255, 0.7);
		font-size: 1.125rem;
	}
	
	.plans-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.plan-card {
		padding: 3rem 2.5rem;
		text-align: center;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(25px);
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 24px;
		box-shadow: 
			0 12px 40px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		
		&.featured {
			background: rgba(255, 255, 255, 0.12);
			border: 1px solid rgba(0, 123, 255, 0.3);
			transform: scale(1.05);
			box-shadow: 
				0 20px 60px rgba(0, 123, 255, 0.2),
				inset 0 1px 0 rgba(255, 255, 255, 0.3),
				0 0 0 1px rgba(0, 123, 255, 0.2);
		}
		
		&:hover {
			transform: translateY(-8px);
			box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
		}
		
		&.featured:hover {
			transform: translateY(-10px) scale(1.08);
			box-shadow: 
				0 30px 80px rgba(0, 123, 255, 0.25),
				inset 0 1px 0 rgba(255, 255, 255, 0.4),
				0 0 0 1px rgba(0, 123, 255, 0.4);
		}
	}
	
	.plan-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: linear-gradient(135deg, #f59e0b, #d97706);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
	}
	
	.plan-card-header {
		margin-bottom: 2rem;
	}
	
	.plan-icon {
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		font-size: 2rem;
		color: white;
		box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
	}
	
	.plan-name {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		margin-bottom: 0.5rem;
	}
	
	.plan-description {
		color: rgba(255, 255, 255, 0.7);
		font-size: 1rem;
	}
	
	.plan-features {
		margin-bottom: 2rem;
		text-align: left;
	}
	
	.feature-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 0;
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.95rem;
		line-height: 1.4;
		
		&.included {
			color: white;
			
			i {
				color: #10b981;
				font-size: 1rem;
			}
		}
		
		&.excluded {
			color: rgba(255, 255, 255, 0.5);
			opacity: 0.7;
			
			i {
				color: rgba(255, 255, 255, 0.5);
				font-size: 1rem;
			}
		}
	}
	
	.plan-action {
		margin-top: auto;
	}
	
	.plan-btn {
		width: 100%;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.3);
		padding: 1rem 1.5rem;
		border-radius: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		position: relative;
		overflow: hidden;
		
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: -100%;
			width: 100%;
			height: 100%;
			background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
			transition: left 0.5s ease;
		}
		
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
			
			&::before {
				left: 0;
			}
		}
		
		&.primary {
			background: linear-gradient(135deg, #3b82f6, #1d4ed8);
			border-color: transparent;
			color: white;
			box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
			
			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
			}
		}
	}
	
	.pricing-info {
		margin: 4rem 0;
	}
	
	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
	
	.info-card {
		background: rgba(15, 23, 42, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		backdrop-filter: blur(10px);
		transition: all 0.3s ease;
		
		&:hover {
			transform: translateY(-4px);
			border-color: #3b82f6;
		}
	}
	
	.info-icon {
		width: 60px;
		height: 60px;
		background: rgba(59, 130, 246, 0.1);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		font-size: 1.5rem;
		color: #3b82f6;
	}
	
	.info-card h4 {
		font-size: 1.25rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	
	.info-card p {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
		font-size: 0.95rem;
	}
	
	.pricing-cta {
		background: rgba(59, 130, 246, 0.05);
		border: 1px solid rgba(59, 130, 246, 0.2);
		border-radius: 24px;
		padding: 3rem;
		text-align: center;
		backdrop-filter: blur(10px);
	}
	
	.cta-content h3 {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin-bottom: 1rem;
	}
	
	.cta-content p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.125rem;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}
	
	.cta-btn {
		padding: 1rem 2rem;
		border: none;
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
		
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
	
	@media (max-width: 768px) {
		.pricing-container {
			padding: 0 1rem;
		}
		
		.pricing-header {
			margin-bottom: 3rem;
		}
		
		.switcher-container {
			flex-direction: column;
			gap: 0.5rem;
		}
		
		.type-btn {
			min-width: auto;
			justify-content: center;
		}
		
		.plans-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		
		.plan-card {
			padding: 2rem;
			
			&.featured {
				transform: none;
			}
		}
		
		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}
		
		.cta-btn {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
