var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var greeting = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  return greeting
}
