<!-- Navbar.svelte -->
<script>
  import { requests } from "../../utils/requests.js";

  const handleClick = (genreKey) => {
    window.location.href = `/?genre=${genreKey}`;
  };
</script>

<nav class="relative">
  <div class="flex px-10 sm:px-20 text-base whitespace-nowrap space-x-5 font-semibold overflow-x-scroll scrollbar-hide">
    {#each Object.entries(requests) as [key, request]}
      <div>
        <button
          on:click={() => handleClick(key)}
          class="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-yellow-700"
        >
          {request.title}
      </button>
      </div>
    {/each}
  </div>
  <div class="absolute top-0 right-0 bg-gradient-to-l from-slate-950 h-10 w-1/12" />
</nav>
