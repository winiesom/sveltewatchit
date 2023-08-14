<!-- App.svelte -->
<script>
  import { onMount, setContext } from 'svelte';
  import { movieResults, fetchMovies } from '../stores/results.js';

  // Import components
  import Header from "./components/Header.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Results from "./components/Results.svelte";
  import { requests } from "../utils/requests";

  // Fetch movies on component mount
  onMount(async (genreKey) => {
    if(genreKey && requests[genreKey]) {
      const apiUrl = requests[genreKey].url;
      await fetchMovies(apiUrl);
    }
    // setContext('fetchMovies', fetchMovies); // Set fetchMovies function in context for use in other components
  });

  let movies = [];

  // Update the movies variable whenever movieResults changes
  $: movies = $movieResults;

  const handleGenreSelected = async (genreKey) => {
    if (genreKey && requests[genreKey]) {
      const apiUrl = requests[genreKey].url;
      console.log(apiUrl, 'apiurl')
      await fetchMovies(apiUrl);
    } else {
      await fetchTrendingMovies();
    }
  };

  const fetchTrendingMovies = async () => {
    const apiUrl = requests.fetchTrending.url;
    await fetchMovies(apiUrl);
  };
</script>

<div>
  <!-- Render Header and Navbar on the same line for large screens -->
  <header class="hidden md:flex flex-row m-5 items-center h-auto">
    <Header />
    <Navbar on:genre-selected={handleGenreSelected} />
  </header>

  <!-- Render Header and Navbar on different lines for medium and smaller screens -->
  <div class="flex md:hidden flex-col m-5 items-center h-auto">
    <Header />
  </div>
  <div class="md:hidden">
    <Navbar on:genre-selected={handleGenreSelected} />
  </div>

  <div class="flex flex-row flex-wrap-reverse md:flex-wrap w-full">
    <div class="w-full md:w-1/6">
      <Sidebar />
    </div>

    <div class="w-full md:w-5/6">
      <Results />
    </div>
  </div>
</div>
