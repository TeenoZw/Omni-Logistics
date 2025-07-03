<script lang="ts">
	import { onMount } from 'svelte';
	
	let heroStats = [
		{ number: '137+', label: 'Active Users' },
		{ number: '3', label: 'Provinces Served' },
		{ number: '247', label: 'Active Assets' }
	];
	
	onMount(() => {
		// Initialize orbit animations
		const orbits = document.querySelectorAll('.orbit-ring');
		orbits.forEach((orbit, index) => {
			orbit.style.animationDelay = `${index * 0.5}s`;
		});
	});
</script>

<section id="home" class="hero-section">
	<div class="hero-container">
		<div class="hero-content">
			<div class="hero-badge">
				<span>🚀 Discover The Power of Omni Eye Portal</span>
			</div>
			
			<h1 class="hero-title">
				<span class="gradient-text">Omni Logistics</span>
				<br>Empowering your fleet, Driving your success!!!
			</h1>
			
			<p class="hero-description">
				Professional vehicle tracking and fleet management solutions for individuals and businesses in Zimbabwe.
			</p>
			
			<div class="hero-actions">
				<button class="hero-btn primary">
					<span>Get Started</span>
					<div class="btn-glow"></div>
				</button>
				<button class="hero-btn secondary">
					<i class="fas fa-phone"></i>
					<span>Contact Sales</span>
				</button>
			</div>
			
			<div class="hero-stats">
				{#each heroStats as stat}
					<div class="stat-item">
						<div class="stat-number">{stat.number}</div>
						<div class="stat-label">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
		
		<div class="hero-visual">
			<div class="central-hub">
				<div class="hub-core"></div>
				<div class="orbit-ring ring-1">
					<div class="orbit-dot dot-1"></div>
					<div class="orbit-dot dot-2"></div>
					<div class="orbit-dot dot-3"></div>
				</div>
				<div class="orbit-ring ring-2">
					<div class="orbit-dot dot-4"></div>
					<div class="orbit-dot dot-5"></div>
				</div>
				<div class="data-stream stream-1"></div>
				<div class="data-stream stream-2"></div>
				<div class="data-stream stream-3"></div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.hero-section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 6rem 0 4rem;
		position: relative;
		background: linear-gradient(
				135deg,
				rgba(10, 11, 26, 0.85) 0%,
				rgba(17, 18, 37, 0.8) 50%,
				rgba(10, 11, 26, 0.85) 100%
			),
			url('/assets/world-map background.jpg');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
	
	.hero-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}
	
	.hero-content {
		z-index: 2;
	}
	
	.hero-badge {
		display: inline-block;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.15);
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.875rem;
		margin-bottom: 1.5rem;
		color: #00bfff;
	}
	
	.hero-title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 1.5rem;
		color: white;
	}
	
	.gradient-text {
		background: linear-gradient(135deg, #3b82f6, #00bfff, #87ceeb);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	
	.hero-description {
		font-size: 1.125rem;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 2rem;
		max-width: 500px;
		line-height: 1.6;
	}
	
	.hero-actions {
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
	}
	
	.hero-btn {
		position: relative;
		border: none;
		padding: 1rem 2rem;
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.4s ease;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
		overflow: hidden;
		
		&.primary {
			background: linear-gradient(135deg, #3b82f6, #1d4ed8);
			color: white;
			
			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
			}
		}
		
		&.secondary {
			background: rgba(255, 255, 255, 0.05);
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.15);
			color: white;
			
			&:hover {
				background: rgba(255, 255, 255, 0.1);
			}
		}
	}
	
	.btn-glow {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transform: rotate(45deg) translate(-100%, -100%);
		transition: all 0.6s ease;
	}
	
	.hero-btn.primary:hover .btn-glow {
		transform: rotate(45deg) translate(100%, 100%);
	}
	
	.hero-stats {
		display: flex;
		gap: 2rem;
	}
	
	.stat-item {
		text-align: center;
	}
	
	.stat-number {
		font-size: 2rem;
		font-weight: 800;
		color: #00bfff;
		margin-bottom: 0.25rem;
	}
	
	.stat-label {
		font-size: 0.875rem;
		color: rgba(255, 255, 255, 0.6);
	}
	
	.hero-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	
	.central-hub {
		position: relative;
		width: 300px;
		height: 300px;
	}
	
	.hub-core {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, #3b82f6, #00bfff);
		border-radius: 50%;
		box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
		animation: pulse 2s ease-in-out infinite;
	}
	
	.orbit-ring {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 2px solid rgba(59, 130, 246, 0.3);
		border-radius: 50%;
		animation: rotate 20s linear infinite;
		
		&.ring-1 {
			width: 180px;
			height: 180px;
		}
		
		&.ring-2 {
			width: 240px;
			height: 240px;
			animation-direction: reverse;
		}
	}
	
	.orbit-dot {
		position: absolute;
		width: 10px;
		height: 10px;
		background: #00bfff;
		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0, 191, 255, 0.8);
		
		&.dot-1 { top: -5px; left: 50%; transform: translateX(-50%); }
		&.dot-2 { top: 50%; right: -5px; transform: translateY(-50%); }
		&.dot-3 { bottom: -5px; left: 50%; transform: translateX(-50%); }
		&.dot-4 { top: -5px; left: 50%; transform: translateX(-50%); }
		&.dot-5 { bottom: -5px; left: 50%; transform: translateX(-50%); }
	}
	
	.data-stream {
		position: absolute;
		width: 2px;
		height: 60px;
		background: linear-gradient(to bottom, #3b82f6, transparent);
		animation: dataFlow 3s ease-in-out infinite;
		
		&.stream-1 {
			top: 20%;
			left: 10%;
			animation-delay: 0s;
		}
		
		&.stream-2 {
			top: 60%;
			right: 15%;
			animation-delay: 1s;
		}
		
		&.stream-3 {
			bottom: 20%;
			left: 60%;
			animation-delay: 2s;
		}
	}
	
	@keyframes pulse {
		0%, 100% { 
			box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
			transform: translate(-50%, -50%) scale(1);
		}
		50% { 
			box-shadow: 0 0 50px rgba(59, 130, 246, 0.8);
			transform: translate(-50%, -50%) scale(1.1);
		}
	}
	
	@keyframes rotate {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(360deg); }
	}
	
	@keyframes dataFlow {
		0%, 100% { opacity: 0; }
		50% { opacity: 1; }
	}
	
	@media (max-width: 768px) {
		.hero-container {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}
		
		.hero-actions {
			flex-direction: column;
			align-items: center;
		}
		
		.hero-stats {
			justify-content: center;
		}
		
		.central-hub {
			width: 250px;
			height: 250px;
		}
	}
</style>
