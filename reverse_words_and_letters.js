// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    return (str.split(" ").reverse().join(" "))
  }
console.log(reverseWords("The greatest victory is that which requires no battle"));


// Complete the solution so that it reverses all of the letters within the string passed in.

function reverseLetters(str){
    return (str.split("").reverse().join("").split(" ").reverse().join(" "));
  }
  console.log(reverseLetters("The greatest victory is that which requires no battle"));