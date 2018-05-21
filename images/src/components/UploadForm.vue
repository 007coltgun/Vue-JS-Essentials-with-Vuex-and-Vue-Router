<template>
  <div class="dropper">
    <input 
     type="file" 
     @change="uploadImages($event.target.files)"
     multiple
     accept="image/*">
    <span>Drag file her!</span>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 1px dashed black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.dropper:hover {
  background-color: #eee;
}
input {
  width: 100%;
  height: 30vh;
  opacity: 0;
  position: absolute;
}
</style>
