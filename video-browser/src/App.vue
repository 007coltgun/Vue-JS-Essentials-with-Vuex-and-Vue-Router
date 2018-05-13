<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
const API_KEY = 'AIzaSyCrS_fgQDO6RWv7AdcxIde89t7It8IOcvc';
const YOUTUBE_V3_URL = 'https://www.googleapis.com/youtube/v3/search';
export default {
  name: "App",
  components: {
    SearchBar: SearchBar
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get(YOUTUBE_V3_URL, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
      .then(response => console.log(response))
    }
  }
};
</script>

<style scoped>

</style>