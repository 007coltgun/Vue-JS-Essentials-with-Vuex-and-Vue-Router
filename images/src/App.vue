<template>
  <div id="app">
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import store from './store';
export default {
  name: "App",
  store: store,
  components: {
    AppHeader: AppHeader
  }
};
</script>

<style scoped>
</style>