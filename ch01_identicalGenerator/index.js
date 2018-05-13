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
  },
  template: `
    <div>
      <h3>My Identicon Generator</h3>
      <div>
        Input:
        <input v-on:input="onInput">
      </div>
      <div>
        Output:
        <div>{{textInput}}</div>
        <div v-html="identicon"></div>
      </div>
    </div>
  `
});
