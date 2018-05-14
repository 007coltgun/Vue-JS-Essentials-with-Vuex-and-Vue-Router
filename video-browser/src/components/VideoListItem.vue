<template>
  <li class="list-group-item">
    <img :src="thumbnailUrl" alt="">
    {{videoTitle}}
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ['video'],
  computed: {
    videoTitle() {
      return this.video.snippet.title;
    },
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    }
  }
};
</script>

<style scoped>

</style>