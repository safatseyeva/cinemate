<template>
  <div>
    <MovieCard v-if="item.release_date"
      :title="item.title"
      :id="item.id"
      :overview="item.overview"
      :release_date="item.release_date"
      :popularity="item.popularity"
      :poster_path="item.poster_path"
      :item="item"
    />
    <SeriesCard v-if="item.first_air_date"
      :name="item.name"
      :id="item.id"
      :overview="item.overview"
      :first_air_date="item.first_air_date"
      :popularity="item.popularity"
      :poster_path="item.poster_path"
      :item="item"
    />
  </div>
</template>

<script setup>
  const itemState = useState('chosenItem', () => {});
  const item = itemState.value;
</script>

