<template>
  <div>
    <section>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Featured Movies
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

    <br/><br/>

    <section>
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Featured Series
      </h1>
      <ul class="grid grid-cols-5 gap">
        <li v-for="ser in series" :key="ser.id">
          <SeriesCard
            :name="ser.name"
            :id="ser.id"
            :overview="ser.overview"
            :first_air_date="ser.first_air_date"
            :popularity="ser.popularity"
            :poster_path="ser.poster_path"
            :item="ser"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
  const movies = useState(() => []);
  const series = useState(() => []);

  const { data } = useFetch('/api/movies/discover', {
    transform: data => {
      movies.value = data.movies.results;
      series.value = data.series.results;
    }
  });
</script>
