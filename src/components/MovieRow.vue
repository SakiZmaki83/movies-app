<template>
  <div
    class="row"
    :class="{ 'highlighted': selected }"
  >
    <div class="col-sm" v-text="movie.id"></div>
    <div class="col-sm" v-text="movie.title"></div>
    <div class="col-sm" v-text="movie.director"></div>
    <div class="col-sm" v-text="movie.genre"></div>
    <div class="col-sm" v-text="movie.releaseDate"></div>
    <div class="col-sm" v-text="movie.duration"></div>
    <div class="col-sm">
      <b-button
        type="submit"
        variant="primary"
        @click="onSelected">
        Select
      </b-button>
    </div>
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
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    onSelected() {
      this.selected = true
      this.$emit('on-selected-movie', this.movie)
    }
  }
}
</script>

<style>
.highlighted {
  background: gray;
}
</style>