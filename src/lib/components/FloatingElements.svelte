<script>
import { onMount } from "svelte";
import { fade } from "svelte/transition";

let showBackToTop = false;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleScroll() {
  showBackToTop = window.scrollY > 300;
}

onMount(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
});
</script>

{#if showBackToTop}
  <button class="back-to-top" on:click={scrollToTop} transition:fade>
    <i class="fas fa-chevron-up"></i>
  </button>
{/if}

<style>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00a2ff, #0066cc);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 162, 255, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-to-top:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 162, 255, 0.4);
}

.back-to-top i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .back-to-top {
    width: 45px;
    height: 45px;
    bottom: 1.5rem;
    right: 1.5rem;
  }
}
</style>
