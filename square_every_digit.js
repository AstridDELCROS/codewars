// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    //may the code be with you
    const numToStr = num.toString();
    console.log("num =>", numToStr);
    const numArray = numToStr.split("");
    console.log(numArray)
    let sum = "";
    for (const number of numArray) {
      sum += number * number;
      console.log(sum)
    }
    const parsedSum = parseInt(sum);
    return parsedSum;
  }

  console.log(squareDigits(9119));