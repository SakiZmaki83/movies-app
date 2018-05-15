<template>
  <div>
    <h3>Store Movie</h3>
    <b-form
      @submit="storeMovie"
    >
      <b-form-group
        label="Title:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.title"
          placeholder="Enter title">
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Director:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.director"
          placeholder="Enter director">
        </b-form-input>
      </b-form-group>


      <b-form-group
        label="ImageUrl:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.imageUrl"
          placeholder="Enter imageUrl">
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Duration:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.duration"
          placeholder="Enter duration"
        >
        </b-form-input>
      </b-form-group>

    <b-form-group
      label="Release date:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.releaseDate"
          placeholder="Enter release date">
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Genre:"
      >
        <b-form-input
          type="text"
          v-model="movieForm.genre"
          placeholder="Enter genre"
        >
        </b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        variant="primary">
        Submit
      </b-button>
    </b-form>
    <div>List of Movies</div>
    <div class="container">
      <movie-row
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MoviesService from './../services/MoviesService'
import MovieRow from './MovieRow.vue'
export default {
  name: 'AppMovies',
  components: {
    MovieRow
  },
  data() {
    return {
      movies: [],
      movieForm: {
        title: '',
        director: '',
        imageUrl: '',
        duration: '',
        releaseDate: '',
        genre: ''
      }
    }
  },
  methods: {
    storeMovie() {
      MoviesService.store(this.movieForm)
    }
  },
  beforeRouteEnter(to, from, next) {
    MoviesService.index().then(({ data }) => {
      next((context) => {
        context.movies = data;
      })
    })
  }
}
</script>