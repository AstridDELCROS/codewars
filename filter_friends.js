// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    //your code here
    const friendsArr = friends.filter((element) => element.length === 4);
    console.log(friendsArr);
    return (friendsArr);
  }

  friend(["Ryan", "Kieran", "Mark"]);