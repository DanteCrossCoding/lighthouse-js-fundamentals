const sumLargestNumbers = function(data){

  let largerNumber = 0;
  for(let i = 0; i < data.length; i++){
    if(data[i] > largerNumber){
      largerNumber = data[i];
    }
  }
  data.splice(data.indexOf(largerNumber), 1);

  let smallerNumber = 0;
  for(let j = 0; j < data.length; j++){
    if(data[j] > smallerNumber){
      smallerNumber = data[j];
    }
  }
  return largerNumber + smallerNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));