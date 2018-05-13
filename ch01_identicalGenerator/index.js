new Vue({
  el: '#app',
  data: { // Initialize our data(state)
    textInput: ''
  },
  computed: { // Turn data into viewable values
    identicon: function() {
      // API: jdenticon.toSvg(hash|value, size[, padding])
      return jdenticon.toSvg(this.textInput, 200);
    }
  },
  methods: { // Use this function to change data
    onInput: function(event) {
      this.textInput = event.target.value;
    }
  }
});
