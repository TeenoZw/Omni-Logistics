<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

export let user = null;
export let isVisible = false;

function handleLogout() {
  dispatch("logout");
}
</script>

{#if isVisible}
  <section id="dashboard" class="dashboard">
    <div class="dashboard-container">
      <div class="glassy-card">
        <h2>Welcome to the Omni Eye Portal</h2>
        {#if user}
          <p>Welcome back, {user.email}!</p>
        {:else}
          <p>You are now logged in.</p>
        {/if}
        
        <div class="dashboard-actions">
          <button class="logout-btn" on:click={handleLogout}>
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  </section>
{/if}

<style>
.dashboard {
  min-height: 60vh;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(13, 17, 38, 0.9), rgba(26, 34, 61, 0.9));
}

.dashboard-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.glassy-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.glassy-card h2 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00a2ff, #0066cc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glassy-card p {
  margin: 0 0 2rem 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
}

.dashboard-actions {
  margin-top: 2rem;
}

.logout-btn {
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  border: none;
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 120px;
  justify-content: center;
}

.logout-btn:hover {
  background: linear-gradient(135deg, #ff3742, #ff2837);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 71, 87, 0.4);
}

.logout-btn i {
  font-size: 0.9rem;
}
</style>
