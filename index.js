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
    array.shift()
    return announcement
  }
  if (array.length === 0){
    var line = "There is nobody waiting to be served!"
    return line
  }
}

function currentLine(array) {
  let i = 0
  while (i < array.length) {
    var line = ''
    i++
    line + i + '. ' + array[i-1] + ','
  }
  currentLine = "The line is currently: " + line
}
