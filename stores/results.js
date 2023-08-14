import { writable } from 'svelte/store';

// Define the writable store for movie results
export const movieResults = writable([]);

export const isFetched = writable(false);

const baseApiUrl = 'https://api.themoviedb.org/3/';

export const fetchMovies = async (apiUrl, totalPages = 1) => {
  try {
    const resultsPerPage = 10;
    const allMovieResults = [];

    // Fetch multiple pages in parallel using Promise.all
    const promises = Array.from({ length: totalPages }, (_, i) => {
      const page = i + 1;
      const urlWithPage = `${baseApiUrl}${apiUrl}&page=${page}&per_page=${resultsPerPage}`;
      console.log(urlWithPage, 'urlwithpage')
      return fetch(urlWithPage).then((response) => response.json());
    });

    const responses = await Promise.all(promises);

    // Concatenate the results from all pages
    responses.forEach((data) => {
      allMovieResults.push(...data.results);
    });

    // Update the movieResults store with the new data
    movieResults.set(allMovieResults);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
