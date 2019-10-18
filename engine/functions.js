function RGBA (r, g, b, a) {
  var value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
  return value;
}

function nearlyEquals (number1, number2, maxDifference) {
  var difference = Math.abs(number1 - number2);
  return difference <= maxDifference;
}
