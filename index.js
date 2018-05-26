var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var greeting = "Welcome, " + name + ". You are number " + katzDeliLine[name] + " in line."
  return greeting
}
