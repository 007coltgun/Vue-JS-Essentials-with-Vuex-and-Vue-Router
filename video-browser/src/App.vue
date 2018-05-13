<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
const API_KEY = 'AIzaSyCrS_fgQDO6RWv7AdcxIde89t7It8IOcvc';
export default {
  name: "App",
  components: {
    SearchBar: SearchBar
  },
  methods: {
    onTermChange(searchTerm) {
      console.log(searchTerm);
    }
  }
};
</script>

<style scoped>

</style>