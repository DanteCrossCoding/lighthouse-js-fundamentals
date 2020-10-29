var mammals = new Array("cat","dog","human","whale","seal");
var animalString = "";
for (var i = 0; i < mammals. length; i++) {
  if(i < mammals.length-1){
   animalString += mammals[i] + "," + " ";
}else{
   animalString += mammals[i] + ".";
}
}
console.log(animalString);