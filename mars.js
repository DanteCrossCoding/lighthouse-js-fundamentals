const howManyHundreds = function(num){
  var crate = Math.floor(num / 100);
  return crate;
}
console.log(howManyHundreds(500));