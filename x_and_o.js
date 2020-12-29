// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

function XO(str) {
    const getO = [];
    const getX = [];
    let i = 0;
    str.split(", ")
    while (str[i]) {
      if (str[i] === "o" || str[i] === "O")
        getO.push(str[i]);
      else if (str[i] === "x" || str[i] === "X")
        getX.push(str[i]);
      i++;
    }
    if (getO.length === getX.length)
      return true;
    else
      return false;
  }

  console.log(XO("xxOo"));
  console.log(XO("xxxm"));
