<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList :videos="videos"></VideoList>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyCrS_fgQDO6RWv7AdcxIde89t7It8IOcvc';
const YOUTUBE_V3_URL = 'https://www.googleapis.com/youtube/v3/search';
export default {
  name: "App",
  components: {
    SearchBar: SearchBar,
    VideoList: VideoList
  },
  data() {
    return {
      videos: []
    }
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
      .then(response => {
        this.videos = response.data.items;
      })
    }
  }
};
</script>

<style scoped>

</style>