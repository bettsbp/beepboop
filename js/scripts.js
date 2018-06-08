// business logic

function toBeepBoop(number) {
  var numbers = number.toString().split('')
  var modifiedArray = []
  var resultArray = []
  var result = resultArray.toString()


  for (i=0; i<numbers.length; i++) {
    if (numbers[i].toString().includes('0')) {
      resultArray.push('Beep')
    } else if (numbers[i].toString().includes('1')) {
      resultArray.push('Boop')
    } else if (numbers[i] / 3 === 0) {
      resultArray.push("I'm sorry Dave, I can't do that")
    } else {
      results.push(numbers[i])
    }
  }
}

// user logic

$(document).ready(function() {
  $('#ogNumber').submit(function(event) {

    event.preventDefault();

    var number = $('input#ogNumber').val();

    toBeepBoop(number);

    // alert(resultArray);
  })
})
