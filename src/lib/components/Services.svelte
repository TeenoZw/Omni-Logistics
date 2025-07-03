<script lang="ts">
	let services = [
		{
			icon: 'fas fa-eye',
			title: 'Real-time Tracking',
			description: 'Professional GPS tracking with live location updates, trip history, and comprehensive fleet visibility through our Omni Eye Portal.',
			features: ['Live Tracking', 'Trip History', 'Fleet Dashboard'],
			featured: false
		},
		{
			icon: 'fas fa-shield-halved',
			title: 'Advanced Security',
			description: 'Multi-tier security features including geofencing, immobilization, tow detection, and instant alerts for complete vehicle protection.',
			features: ['Geofencing', 'Immobilization', 'Instant Alerts'],
			featured: true
		},
		{
			icon: 'fas fa-cogs',
			title: 'Fleet Management',
			description: 'Complete fleet operations including maintenance scheduling, driver behavior monitoring, fuel tracking, and comprehensive reporting.',
			features: ['Maintenance', 'Driver Behavior', 'Fuel Monitoring'],
			featured: false
		}
	];
</script>

<section id="services" class="services-section">
	<div class="section-container">
		<div class="section-header">
			<h2 class="section-title">Complete Fleet Solutions</h2>
			<p class="section-subtitle">
				Comprehensive tracking and management services for individuals and businesses
			</p>
		</div>
		
		<div class="services-grid">
			{#each services as service}
				<div class="service-card" class:featured={service.featured}>
					<div class="service-icon">
						<i class={service.icon}></i>
					</div>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
					<div class="service-features">
						{#each service.features as feature}
							<span class="feature-tag">{feature}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.services-section {
		background: rgba(0, 31, 63, 0.4);
		backdrop-filter: blur(5px);
		position: relative;
		padding: 6rem 0;
	}
	
	.section-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}
	
	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.section-title {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 800;
		margin-bottom: 1rem;
		color: white;
	}
	
	.section-subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}
	
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
	
	.service-card {
		padding: 3rem 2.5rem;
		text-align: center;
		position: relative;
		overflow: hidden;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		border-radius: 24px;
		backdrop-filter: blur(25px);
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid rgba(255, 255, 255, 0.15);
		box-shadow: 
			0 12px 40px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: radial-gradient(
				circle at 50% 0%,
				rgba(0, 123, 255, 0.08) 0%,
				transparent 50%
			);
			border-radius: inherit;
			transition: all 0.4s ease;
			z-index: 0;
			opacity: 0;
		}
		
		&:hover {
			transform: translateY(-12px) scale(1.02);
			box-shadow: 
				0 25px 60px rgba(0, 0, 0, 0.15),
				inset 0 1px 0 rgba(255, 255, 255, 0.3),
				0 0 0 1px rgba(0, 123, 255, 0.2);
				
			&::before {
				opacity: 1;
				background: radial-gradient(
					circle at 50% 0%,
					rgba(0, 123, 255, 0.15) 0%,
					rgba(0, 191, 255, 0.05) 70%,
					transparent 100%
				);
			}
		}
		
		&.featured {
			background: rgba(255, 255, 255, 0.12);
			border: 1px solid rgba(0, 123, 255, 0.3);
			transform: scale(1.05);
			box-shadow: 
				0 20px 60px rgba(0, 123, 255, 0.2),
				inset 0 1px 0 rgba(255, 255, 255, 0.3),
				0 0 0 1px rgba(0, 123, 255, 0.2);
		}
		
		> * {
			position: relative;
			z-index: 2;
		}
	}
	
	.service-icon {
		font-size: 3rem;
		margin-bottom: 1.5rem;
		display: block;
		color: #3b82f6;
	}
	
	.service-card h3 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		background: linear-gradient(45deg, #007bff, #00bfff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.service-card p {
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}
	
	.service-features {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}
	
	.feature-tag {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.15);
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		font-size: 0.875rem;
		color: #00bfff;
		backdrop-filter: blur(10px);
	}
	
	@media (max-width: 768px) {
		.services-section {
			padding: 4rem 0;
		}
		
		.services-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		
		.service-card {
			padding: 2rem 1.5rem;
			
			&.featured {
				transform: none;
			}
		}
	}
</style>
