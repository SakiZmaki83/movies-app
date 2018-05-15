<template>
  <div class="row">
    <div class="col-sm" v-text="movie.id"></div>
    <div class="col-sm" v-text="movie.title"></div>
    <div class="col-sm" v-text="movie.director"></div>
    <div class="col-sm" v-text="movie.genre"></div>
    <div class="col-sm" v-text="movie.releaseDate"></div>
    <div class="col-sm" v-text="movie.duration"></div>
  </div>
</template>

<script>
export default {
  name: 'MovieRow',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>
