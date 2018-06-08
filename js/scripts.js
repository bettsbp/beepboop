// business logic

function toBeepBoop(number) {

  var resultArray = []

  for (i=0; i<=number; i++) { // dont set this to length, it explodes
    if (i.toString().includes('0')) {
      resultArray.push(' ' + 'Beep')
    } else if (i.toString().includes('1')) {
      resultArray.push(' ' + 'Boop')
    } else if (i % 3 === 0) { // this also just needs to be i and not the position in the array
      resultArray.push(" " + "I'm sorry Dave, I can't do that") // WHY IS THIS NOT WORKING
    } else {
      resultArray.push(' ' + i)
    }
  }
  return resultArray
}

// user logic

$(document).ready(function() {
  $('#ogNumber').submit(function(event) {

    event.preventDefault();

    var number = $('input#ogNumber').val();

    $('#results').show();
    $('ul').append('<li>' + toBeepBoop(number) + '</li>');
  })
})
