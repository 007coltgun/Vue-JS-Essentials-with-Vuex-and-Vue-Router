$( document ).ready(function() {
  console.log( "ready!" );
  // step1: whenever a user enters some text
  $('#app').on('input', function(event) {
    console.log('input text:', event.target.value);

    // step2: retreving the new input value

    // step3: turn the input value into a identicon

    // strep4: put the identicon on the screen
  })
});
