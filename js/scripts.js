// business logic

function toBeepBoop(number) {
  var resultArray = []



  for (i=0; i<number.length; i++) {
    if (number[i].toString().includes('0')) {
      resultArray.push('Beep')
    } else if (number[i].toString().includes('1')) {
      resultArray.push('Boop')
    } else if (number[i] / 3 === 0) {
      resultArray.push("I'm sorry Dave, I can't do that") // WHY IS THIS NOT WORKING
    } else {
      resultArray.push(number[i])
      alert(resultArray)
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
