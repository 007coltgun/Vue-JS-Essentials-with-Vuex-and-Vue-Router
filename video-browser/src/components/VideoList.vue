<template>
  <ul>
    <VideoListItem
     v-for="video in videos"
     :key="video.id.videoId"
     :video="video">
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: "VideoList",
  props: {
    videos: Array
  },
  components: {
    VideoListItem: VideoListItem
  }
};
</script>

<style scoped>

</style>