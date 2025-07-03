<script lang="ts">
	let features = [
		{
			icon: 'fas fa-map-marked-alt',
			title: 'Real-time Tracking',
			description: 'Live GPS tracking with precise location updates and historical route playback'
		},
		{
			icon: 'fas fa-route',
			title: 'Trip History & Playback',
			description: 'Detailed trip records with route visualization and export capabilities'
		},
		{
			icon: 'fas fa-draw-polygon',
			title: 'Advanced Geofencing',
			description: 'Create custom zones with entry/exit alerts and comprehensive reporting'
		},
		{
			icon: 'fas fa-user-tie',
			title: 'Driver Behavior Analytics',
			description: 'Monitor driving patterns, scoring, and generate safety reports'
		},
		{
			icon: 'fas fa-leaf',
			title: 'Eco-Driving Scores',
			description: 'Environmental impact tracking with fuel efficiency ratings'
		},
		{
			icon: 'fas fa-exclamation-circle',
			title: 'Harsh Event Detection',
			description: 'Automated alerts for harsh braking, acceleration, and cornering'
		},
		{
			icon: 'fas fa-truck-moving',
			title: 'Tow Detection',
			description: 'Advanced algorithms detect unauthorized vehicle movement and towing'
		},
		{
			icon: 'fas fa-gas-pump',
			title: 'Fuel Monitoring',
			description: 'Real-time fuel levels, consumption tracking, and theft alerts'
		},
		{
			icon: 'fas fa-tools',
			title: 'Maintenance Scheduling',
			description: 'Automated service reminders and comprehensive maintenance records'
		},
		{
			icon: 'fas fa-chart-line',
			title: 'Advanced Reporting',
			description: 'Comprehensive analytics with customizable reports and data export'
		},
		{
			icon: 'fas fa-users-cog',
			title: 'Multi-User Management',
			description: 'Role-based access control with different permission levels'
		},
		{
			icon: 'fas fa-power-off',
			title: 'Remote Immobilization',
			description: 'Emergency vehicle shutdown capability for ultimate security'
		}
	];
	
	let mainFeatures = [
		{
			icon: 'fas fa-tachometer-alt',
			title: 'Driver Behavior Monitoring',
			description: 'Track harsh braking, cornering, acceleration and eco-driving scores'
		},
		{
			icon: 'fas fa-wrench',
			title: 'Maintenance Scheduling',
			description: 'Automated service reminders and maintenance record management'
		},
		{
			icon: 'fas fa-gas-pump',
			title: 'Fuel Monitoring',
			description: 'Real-time fuel level tracking and consumption analytics'
		},
		{
			icon: 'fas fa-exclamation-triangle',
			title: 'Tow Detection',
			description: 'Advanced algorithms detect unauthorized vehicle movement'
		}
	];
</script>

<section id="features" class="features-section">
	<div class="section-container">
		<div class="features-content">
			<div class="features-text">
				<h2 class="section-title">Comprehensive Features</h2>
				<p class="section-subtitle">
					Everything you need to manage your fleet efficiently and securely
				</p>
				
				<div class="feature-list">
					{#each mainFeatures as feature}
						<div class="feature-item">
							<div class="feature-icon">
								<i class={feature.icon}></i>
							</div>
							<div class="feature-content">
								<h4>{feature.title}</h4>
								<p>{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
			
			<div class="features-visual">
				<div class="glass-dashboard">
					<div class="dashboard-header">
						<div class="status-dot active"></div>
						<span>Fleet Command Center</span>
					</div>
					<div class="dashboard-content">
						<div class="metric-card">
							<div class="metric-value">847</div>
							<div class="metric-label">Active Vehicles</div>
						</div>
						<div class="metric-card">
							<div class="metric-value">12.4</div>
							<div class="metric-label">Avg Speed (km/h)</div>
						</div>
						<div class="pulse-map">
							<div class="map-dot dot-1"></div>
							<div class="map-dot dot-2"></div>
							<div class="map-dot dot-3"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Grid Section -->
<section class="features-grid-section">
	<div class="section-container">
		<div class="section-header">
			<h2 class="section-title">Complete Feature Set</h2>
			<p class="section-subtitle">
				Discover all the powerful tools available across our subscription tiers
			</p>
		</div>
		
		<div class="features-grid">
			{#each features as feature}
				<div class="feature-card">
					<div class="feature-icon">
						<i class={feature.icon}></i>
					</div>
					<h3>{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.features-section {
		padding: 4rem 0;
		background: rgba(0, 0, 0, 0.2);
	}
	
	.features-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.features-text {
		max-width: 500px;
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
		text-align: center;
	}
	
	.section-subtitle {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}
	
	.feature-list {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	
	.feature-item {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 16px;
		transition: all 0.3s ease;
		
		&:hover {
			border-color: #3b82f6;
			transform: translateX(4px);
		}
	}
	
	.feature-icon {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 1.25rem;
		flex-shrink: 0;
	}
	
	.feature-content h4 {
		font-size: 1.125rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.5rem;
	}
	
	.feature-content p {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.5;
		font-size: 0.95rem;
	}
	
	.glass-dashboard {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 20px;
		padding: 2rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}
	
	.dashboard-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
		color: white;
		font-weight: 600;
	}
	
	.status-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: #10b981;
		box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
		animation: pulse 2s ease-in-out infinite;
	}
	
	.dashboard-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
	
	.metric-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		padding: 1rem;
		text-align: center;
	}
	
	.metric-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: #3b82f6;
		margin-bottom: 0.25rem;
	}
	
	.metric-label {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.7);
	}
	
	.pulse-map {
		grid-column: 1 / -1;
		height: 100px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		position: relative;
		overflow: hidden;
	}
	
	.map-dot {
		position: absolute;
		width: 6px;
		height: 6px;
		background: #00bfff;
		border-radius: 50%;
		animation: pulse 3s ease-in-out infinite;
		
		&.dot-1 { top: 30%; left: 20%; animation-delay: -1s; }
		&.dot-2 { top: 60%; left: 60%; animation-delay: -2s; }
		&.dot-3 { top: 80%; right: 20%; animation-delay: -0.5s; }
	}
	
	.features-grid-section {
		background: rgba(0, 0, 0, 0.1);
		padding: 4rem 0;
	}
	
	.features-grid-section .section-header {
		text-align: center;
		margin-bottom: 3rem;
	}
	
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}
	
	.feature-card {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 20px;
		padding: 2rem;
		text-align: center;
		transition: all 0.3s ease;
		
		&:hover {
			transform: translateY(-8px);
			border-color: #3b82f6;
			box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
		}
	}
	
	.feature-card .feature-icon {
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		font-size: 1.5rem;
		color: white;
	}
	
	.feature-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: white;
		margin-bottom: 1rem;
	}
	
	.feature-card p {
		color: rgba(255, 255, 255, 0.7);
		line-height: 1.6;
	}
	
	@keyframes pulse {
		0%, 100% { 
			opacity: 1;
			transform: scale(1);
		}
		50% { 
			opacity: 0.5;
			transform: scale(1.1);
		}
	}
	
	@media (max-width: 768px) {
		.features-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
		
		.features-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
		
		.dashboard-content {
			grid-template-columns: 1fr;
		}
	}
</style>
