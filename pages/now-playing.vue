<template>
  <div>
    <section>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Now Playing Movies
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="mov in movies" :key="mov.id">
          <MovieCard
            :title="mov.title"
            :id="mov.id"
            :overview="mov.overview"
            :release_date="mov.release_date"
            :popularity="mov.popularity"
            :poster_path="mov.poster_path"
            :item="mov"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
  const movies = useState(() => []);
  const { data } = await useFetch('/api/movies/nowplaying', {
    transform: data => {
      movies.value = data.nowPlaying.results;
    }
  });

</script>
