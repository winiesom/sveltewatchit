<!-- MovieCard.svelte -->
<script>
  import ThumbUpOutline from 'svelte-material-icons/ThumbUpOutline.svelte';

  // Define props for the component
  export let movieProp;

  const BASE_URL = "https://image.tmdb.org/t/p/original";
</script>

<div class="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
  <img
    src="{movieProp.backdrop_path ? `${BASE_URL}${movieProp.backdrop_path}` : `${BASE_URL}${movieProp.poster_path}`}"
    height="1080"
    width="1920"
    alt="{movieProp.title}"
  />

  <div class="p-2">
    <p class="truncate max-w-md">{movieProp.overview}</p>
    <h2 class="mt-1 text-1xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
      {movieProp.title || movieProp.original_name}
    </h2>
    {#if movieProp.media_type || movieProp.release_date || movieProp.vote_count}
      <p class="flex items-center opacity-0 group-hover:opacity-100">
        {#if movieProp.media_type}{movieProp.media_type} •{/if}
        {" "}
        {#if movieProp.release_date}{movieProp.release_date} •{/if}
        {" "}
        <ThumbUpOutline class="h-5 mx-2" /> {movieProp.vote_count}
      </p>
    {/if}
  </div>
</div>
