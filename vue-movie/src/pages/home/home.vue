<template>
  <div>
    <div>
      home
    </div>
  </div>
</template>
<script>
  import {
    getMovies
  } from '../../api/movie.js'
export default {
  data(){
    return {

    }
  },
  methods: {
      getMovieInfo() {
        // /api/movie/in_theaters
        getMovies().then(res=>{
           console.log(res,'res')
        })

      }

    },
    created() {
      this.getMovieInfo()
    }
}
</script>

