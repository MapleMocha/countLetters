function countLetters(aString){
  uniqueLetters = {};

  aString = aString.split(" ").join("").toLowerCase();

  for(var i = 0; i < aString.length; i++){
    letter = aString[i];
    if(letter in uniqueLetters)
      uniqueLetters[letter] += 1;
    else
      uniqueLetters[letter] = 1;

  }

  return uniqueLetters;

}

console.log(countLetters("Lighthouse in the house"))
