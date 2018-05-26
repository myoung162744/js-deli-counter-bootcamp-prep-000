var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var greeting = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  return greeting
}

function nowServing(katzDeliLine) {
  var announcement = 'Currently serving ' + katzDeliLine[0]
  return announcement
  katzDeliLine.unshift()
  }
  if (katzDeliLine.length === 0){
    "There is nobody waiting to be served!"
    return default
  }
}
