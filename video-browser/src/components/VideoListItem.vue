<template>
  <li class="media list-group-item" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailUrl" alt="">
    <div class="media-body">
      <h5 class="mt-0">{{videoTitle}}</h5>
      {{videoDescription}}
    </div>
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
    videoDescription() {
      return this.video.snippet.description;
    },
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}
li:hover {
  background-color: #eee;
}
</style>