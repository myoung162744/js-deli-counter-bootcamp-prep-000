var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var greeting = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  return greeting
}

function nowServing() {
  while(katzDeliLine.length > 0){
    return katzDeliLine[0]
    katzDeliLine.unshift()
  }
  return "There is nobody waiting to be served!"
}
