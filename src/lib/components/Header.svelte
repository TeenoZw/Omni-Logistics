<script lang="ts">
	import { onMount } from 'svelte';
	
	let navLinks = [
		{ href: '#home', label: 'Home', active: true },
		{ href: '#services', label: 'Services', active: false },
		{ href: '#features', label: 'Features', active: false },
		{ href: '#pricing', label: 'Pricing', active: false },
		{ href: '#contact', label: 'Contact', active: false }
	];
	
	let showLoginModal = false;
	
	onMount(() => {
		// Initialize smooth scrolling
		const handleNavClick = (e: Event, href: string) => {
			e.preventDefault();
			const targetSection = document.querySelector(href);
			
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				
				// Update active nav link
				navLinks = navLinks.map(link => ({
					...link,
					active: link.href === href
				}));
			}
		};
		
		// Attach click handlers
		document.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', (e) => {
				const href = link.getAttribute('href');
				if (href) handleNavClick(e, href);
			});
		});
	});
</script>

<nav class="futuristic-nav">
	<div class="nav-container">
		<div class="nav-brand">
			<div class="brand-icon">
				<img src="/assets/logo.PNG" alt="Omni Logistics Logo" class="brand-logo">
			</div>
			<span class="brand-text">Omni Logistics</span>
		</div>
		
		<div class="nav-links">
			{#each navLinks as link}
				<a href={link.href} class="nav-link" class:active={link.active}>
					{link.label}
				</a>
			{/each}
		</div>
		
		<div class="nav-actions">
			<button class="login-btn nav-cta" on:click={() => showLoginModal = true}>
				<span>Login</span>
				<i class="fas fa-sign-in-alt"></i>
			</button>
		</div>
	</div>
</nav>

{#if showLoginModal}
	<div class="login-modal" 
		 on:click={() => showLoginModal = false}
		 on:keydown={(e) => e.key === 'Escape' && (showLoginModal = false)}
		 role="dialog"
		 aria-modal="true"
		 tabindex="-1">
		<div class="glassy-card login-card" 
			 on:click|stopPropagation
			 on:keydown|stopPropagation
			 role="none">
			<button class="close-login-modal" on:click={() => showLoginModal = false}>&times;</button>
			<div class="login-logo">
				<img src="/assets/logo.PNG" alt="Omni Logistics Logo" style="width:48px;height:48px;" />
			</div>
			<h2>Login to Omni Eye Portal</h2>
			<form id="loginForm">
				<div class="form-group">
					<label for="loginEmail">Email</label>
					<input type="email" id="loginEmail" name="email" required autocomplete="username" />
				</div>
				<div class="form-group">
					<label for="loginPassword">Password</label>
					<input type="password" id="loginPassword" name="password" required autocomplete="current-password" />
				</div>
				<button type="submit" class="submit-btn">
					<span>Login</span>
				</button>
			</form>
			<div class="login-links">
				<button type="button" id="forgotPasswordLink" class="link-button">Forgot Password?</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.futuristic-nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(10, 11, 26, 0.8);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		z-index: 1000;
		transition: all 0.3s ease;
	}
	
	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
	}
	
	.nav-brand {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.brand-logo {
		width: 40px;
		height: 40px;
		border-radius: 8px;
	}
	
	.brand-text {
		font-size: 1.25rem;
		font-weight: 700;
		color: white;
	}
	
	.nav-links {
		display: flex;
		gap: 2rem;
	}
	
	.nav-link {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.3s ease;
		position: relative;
		
		&:hover, &.active {
			color: #3b82f6;
		}
		
		&.active::after {
			content: '';
			position: absolute;
			bottom: -0.5rem;
			left: 0;
			right: 0;
			height: 2px;
			background: #3b82f6;
			border-radius: 1px;
		}
	}
	
	.login-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 12px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
		}
	}
	
	.login-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2000;
		backdrop-filter: blur(10px);
	}
	
	.login-card {
		background: rgba(15, 23, 42, 0.9);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: 24px;
		padding: 2rem;
		width: 100%;
		max-width: 400px;
		position: relative;
		backdrop-filter: blur(25px);
	}
	
	.close-login-modal {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		color: white;
		font-size: 1.5rem;
		cursor: pointer;
		
		&:hover {
			color: #3b82f6;
		}
	}
	
	.login-logo {
		text-align: center;
		margin-bottom: 1rem;
	}
	
	h2 {
		text-align: center;
		color: white;
		margin-bottom: 2rem;
	}
	
	.form-group {
		margin-bottom: 1.5rem;
		
		label {
			display: block;
			color: white;
			margin-bottom: 0.5rem;
			font-weight: 500;
		}
		
		input {
			width: 100%;
			padding: 0.75rem 1rem;
			border-radius: 8px;
			border: 1px solid rgba(255, 255, 255, 0.2);
			background: rgba(255, 255, 255, 0.1);
			color: white;
			font-size: 1rem;
			
			&:focus {
				outline: none;
				border-color: #3b82f6;
				box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
			}
		}
	}
	
	.submit-btn {
		width: 100%;
		background: linear-gradient(135deg, #3b82f6, #1d4ed8);
		color: white;
		border: none;
		padding: 0.75rem;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		margin-bottom: 1rem;
		
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
		}
	}
	
	.login-links {
		text-align: center;
		
		a {
			color: #3b82f6;
			text-decoration: none;
			
			&:hover {
				text-decoration: underline;
			}
		}
	}
	
	.link-button {
		background: none;
		border: none; 
		color: var(--primary-color);
		cursor: pointer;
		text-decoration: underline;
		font-size: inherit;
		font-family: inherit;
		padding: 0;
	}

	.link-button:hover {
		color: var(--primary-hover);
	}
</style>
