// business logic

function toBeepBoop(number) {

  var resultArray = []

  for (index=0; index<=number; index++) { // dont set this to length, it explodes
    if (index.toString().includes('0')) {
      resultArray.push(' ' + 'Beep')
    } else if (index.toString().includes('1')) {
      resultArray.push(' ' + 'Boop')
    } else if (index % 3 === 0) { // this also just needs to be i and not the position in the array
      resultArray.push(" " + "I'm sorry Dave, I can't do that") // WHY IS THIS NOT WORKING
    } else {
      resultArray.push(' ' + index)
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
    $('ul').append('<li><em>' + toBeepBoop(number) + '</em></li>');
  })

    $('#answers').on('shown.bs.modal', function () {
    $('#answers').trigger('focus')
  })
})
