var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var greeting = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  return greeting
}

function nowServing(array) {
  if (array.length > 0) {
    var announcement = 'Currently serving ' + array[0] +"."
    return announcement
    array.unshift()
  }
  if (array.length === 0){
    var line = "There is nobody waiting to be served!"
    return line
  }
}
