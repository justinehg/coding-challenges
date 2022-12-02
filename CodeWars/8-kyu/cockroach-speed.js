// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
// Note: 0.036 km/h = 1 cm/s & Math.floor() rounds down the result to whole number

function cockroachSpeed(s) {
    return Math.floor(s / 0.036)
  }
