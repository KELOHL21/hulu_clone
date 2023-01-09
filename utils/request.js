const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   
   fetchTrending: {
      title:'Trending',
      url:`/trending/all/day?api_key=${API_KEY}`,
   },

   fetchTopRated: {
      title:'Top Rated',
      url:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
   },
   fetchActionMovies: {
      title:'Action',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=28`
   },
   fetchComedyMovies: {
      title:'Comedy',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=35`
   },
   fetchHorrorMovies: {
      title:'Horror',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=27`
   },
   fetchRomanceMovies: {
      title:'Romance',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=10749`
   },
   fetchComedyMovies: {
      title:'Comedy',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=35`
   },
   fetchMysteryMovies: {
      title:'Mystery',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=9648`
   },
   fetchSciFiMovies: {
      title:'Sci-Fi',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=878`
   },
   fetchWesternMovies: {
      title:'Western',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=37`
   },
   fetchAnimationMovies: {
      title:'Animation',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=16`
   },
   fetchTVMovies: {
      title:'TV Movies',
      url:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=10770`
   },
};