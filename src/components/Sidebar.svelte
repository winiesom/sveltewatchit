<!-- Sidebar.svelte -->
<script>
    import Magnify from "svelte-material-icons/Magnify.svelte";
    import HomeOutline from "svelte-material-icons/HomeOutline.svelte";
    import TrendingUp from "svelte-material-icons/TrendingUp.svelte";
    import Television from "svelte-material-icons/Television.svelte";
    import MovieOutline from "svelte-material-icons/MovieOutline.svelte";
    import Plus from "svelte-material-icons/Plus.svelte";
  </script>


  <div class="flex z-40 items-center w-[120px] m-5 relative">
    <div class="sm:block hidden">
  
      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <Magnify class="w-10 h-10 text-white cursor-pointer" />
      </div>
  
      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <HomeOutline class="w-10 h-10 text-white cursor-pointer" />
      </div>
  
      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <TrendingUp class="w-10 h-10 text-white cursor-pointer" />
      </div>
  
      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <Television class="w-10 h-10 text-white cursor-pointer" />
      </div>
  
      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <MovieOutline class="w-10 h-10 text-white cursor-pointer" />
      </div>
  
      <div class="py-2 mx-10 my-6 active:border-b-4 border-b-yellow-700">
        <Plus class="w-10 h-10 text-white cursor-pointer" />
      </div>
    </div>
  </div>
  