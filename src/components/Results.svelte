<!-- Results.svelte -->
<script>
    import { onMount } from 'svelte';
    import { requests } from "../../utils/requests.js";
    import Thumbnail from "./Thumbnail.svelte";
    import { fetchMovies, movieResults, isFetched } from '../../stores/results';
  
    let movies = [];
  
    // Fetch movies on component mount
    onMount(async () => {
      await fetchData();
    });
  
    // Fetch movies when the route changes
    $: {
      const genreKey = getQueryParam('genre');
      let apiUrl = '';
  
      if (genreKey && requests[genreKey]) {
        apiUrl = `${requests[genreKey].url}`;
      } else {
        // If the genreKey does not exist in requests or not provided, default to fetchTrending
        apiUrl = `${requests.fetchTrending.url}`;
      }

      console.log("Genre Key:", genreKey);
    console.log("API URL:", apiUrl);
  
      // Check if movies have already been fetched
      if (!$isFetched) {
        fetchMovies(apiUrl);
        isFetched.set(true);
      }
    }
  
    // Function to get the value of a query parameter from the URL
    function getQueryParam(param) {
      const searchParams = new URLSearchParams(window.location.search);
      return searchParams.get(param);
    }
  
    // Update the visible movies whenever movieResults changes
    movieResults.subscribe((result) => {
      movies = result;
    });
  
    // Function to fetch data based on the route parameter
    async function fetchData() {
      const genreKey = getQueryParam('genre');
      let apiUrl = '';
  
      if (genreKey && requests[genreKey]) {
        apiUrl = `${requests[genreKey].url}`;
      } else {
        // If the genreKey does not exist in requests or not provided, default to fetchTrending
        apiUrl = `${requests.fetchTrending.url}`;
      }
  
      // Check if movies have already been fetched
      if (!$isFetched) {
        await fetchMovies(apiUrl);
        isFetched.set(true);
      }
    }
  </script>
  

  <div class="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
    {#each movies as movie}
      <div>
        <Thumbnail movieProp={movie} />
      </div>
    {/each}
  </div>
  