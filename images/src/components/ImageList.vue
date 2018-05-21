<template>
  <div v-if="isLoggedIn" class="ui medium images">
    <img 
     v-for="image in allImages" 
     :key="image.id"
     :src="image.link">
  </div>
  <div v-else>
    <h2>Login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  },
}
</script>

<style scoped>

</style>
