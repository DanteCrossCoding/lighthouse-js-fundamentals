const numberOfVowels = function(data) {
  
  let myArr = data.split('');
  let vow = 0
  for(letter of myArr){
    switch(letter){
      case 'a':
        vow += 1;
        break;
      case 'e':
        vow += 1;
        break;
      case 'i':
        vow += 1;
        break;
      case 'o':
        vow += 1;
        break;
      case 'u':
        vow += 1;
        break;        
    }
  } return vow

  };


console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
