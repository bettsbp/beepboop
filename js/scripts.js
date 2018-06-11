// business logic

function toBeepBoop(number) {

  var resultArray = []

  for (index=0; index<=number; index++) {
    if (index % 3 === 0 && index != 0) {
      resultArray.push(' ' + "I'm sorry Dave, I can't do that")
    } else if (index.toString().includes('1')) {
      resultArray.push(' ' + 'Boop')
    } else if (index.toString().includes('0')) {
      resultArray.push(' ' + 'Beep')
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

  });
});
