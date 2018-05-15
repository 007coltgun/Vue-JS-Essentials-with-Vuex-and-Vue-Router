<template>
  <div id="app" class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectVideo"></VideoDetail>
      <VideoList
      :videos="videos"
      @videoSelect="onVideoSelect">
      </VideoList>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCrS_fgQDO6RWv7AdcxIde89t7It8IOcvc';
const YOUTUBE_V3_URL = 'https://www.googleapis.com/youtube/v3/search';
export default {
  name: "App",
  components: {
    SearchBar: SearchBar,
    VideoList: VideoList,
    VideoDetail: VideoDetail
  },
  data() {
    return {
      videos: [],
      selectVideo: null
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
    },
    onVideoSelect(video) {
      this.selectVideo = Object.assign({}, video);  //immutable
    }
  }
};
</script>

<style scoped>

</style>