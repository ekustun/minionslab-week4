/*
Kader Ustun
General Assembly - Week4
Minion Callbacks
*/

const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ];

//////////////////////////////////////////////////////////////
// forEach
//////////////////////////////////////////////////////////////

//First, he wants to test out forEach to check who's present. So as he goes down the array of minions, they should console.log that they're here.

console.log("\n********* forEach METHOD *********\n");
minions.forEach((element,index) => {
    if(index===0){console.log("js", element);}
    else{
      console.log("here", element);
    }
});


//////////////////////////////////////////////////////////////
// MAP
//////////////////////////////////////////////////////////////

// Using the map method, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions

const capitalizedMinions = minions.map((item, index)=>{
  if(item === "kevin"){return item}
  else{
    return item.charAt(0).toUpperCase()+item.slice(1);
    
    //charAt(0) --> gets the first char of each letter
    // toUpperCase() --> converts letter to uppercase
    // slice(1) --> gets the remainder of string (from the second character, index 1, to the end of the string)
    
  }
});

console.log("\n********* MAP METHOD *********\n");
console.log(capitalizedMinions);


//////////////////////////////////////////////////////////////
// FILTER
//////////////////////////////////////////////////////////////

// Use filter to filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

const actuallyCapitalizedMinions = capitalizedMinions.filter((item, index)=>{
  if(item !== "kevin"){return item};
});

console.log("\n********* filter METHOD *********\n");
console.log(actuallyCapitalizedMinions);


//////////////////////////////////////////////////////////////
// every
//////////////////////////////////////////////////////////////

// Use every again, but this time on your new actuallyCapitalizedMinions array, to check if they're all capitalized now

const everyCapitalizedMinions = actuallyCapitalizedMinions.every((item)=>{
  return item[0] === item[0].toUpperCase();
});


console.log("\n********* every METHOD *********\n");
console.log(everyCapitalizedMinions);


/************************************* BONUS METHODS *************************************/

console.log("\n************************ BONUS METHODS ************************");

//////////////////////////////////////////////////////////////
// every
//////////////////////////////////////////////////////////////

// Create a function called isCapitalized that accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized

function isCapitalized(item) {
  if(item[0] === item[0].toUpperCase()){
    return true;
  }
}

// Now using both the every method and the isCapitalized method you just wrote, check whether or not all the capitalizedMinions are capitalized

const finalCheckCapitalizedMinions = capitalizedMinions.every((item)=>{
  if(isCapitalized(item)){
    return true;
  }
});

console.log("\n************ every method ************\n");
console.log(finalCheckCapitalizedMinions);

//////////////////////////////////////////////////////////////
// find
//////////////////////////////////////////////////////////////

// Using find, find which minion is not correctly capitalized in the original capitalizedMinions array and save it to a variable called uncapitalizedMinion, then console log it

const uncapitalizedMinion = capitalizedMinions.find((item)=>{
  if(item[0] !== item[0].toUpperCase()){return item}
});
console.log("\n************ find method ************\n");
console.log(uncapitalizedMinion);

//////////////////////////////////////////////////////////////
// findIndex
//////////////////////////////////////////////////////////////

// Using findIndex, find what index kevin is in the original capitalizedMinions array

const uncapitalizedMinionIndex = capitalizedMinions.findIndex((item)=>{
  if(item[0] !== item[0].toUpperCase()){return item}
});
console.log("\n************ findIndex method ************\n");
console.log(uncapitalizedMinionIndex);

// Now that he's found him, he can just use capitalizedMinions[1] to select kevin and capitalize his name.
capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toUpperCase() + capitalizedMinions[1].slice(1);

// check again using every whether or not capitalizedMinions is all capitalized correctly

const allCapitalizedMinions = capitalizedMinions.every((item)=>{
  return item[0] === item[0].toUpperCase();
});

console.log("\nEach of them capitalized? ", allCapitalizedMinions);

//////////////////////////////////////////////////////////////
// reduce
//////////////////////////////////////////////////////////////

// First, using map create a separate array called minionNameLengths that maps out the minions' name lengths

const minionNameLengths = minions.map((item, index)=>{
  return item.length;
});

// Use reduce to sum up the minionNameLengths array

let initialValue = 0; // to use for reduce method
let sum=0; //defining sum variable to 0 to calculate total sum

const total = minionNameLengths.reduce((accumalator, item)=>{
  return accumalator+item;
}, initialValue);

console.log("\n************ reduce method ************\n");
console.log("The sum : ", total);

//////////////////////////////////////////////////////////////
// some
//////////////////////////////////////////////////////////////

// Check whether or not some of the minion's name lengths are 6 or above. 

console.log("\n************ some method ************\n");

const biggerThan6 = minionNameLengths.some((item)=>{
  return item>6;
});
console.log("Bigger than 6? ", biggerThan6);

// Check whether or not some of the minion's name lengths are 7 or above. 

const biggerThan7 = minionNameLengths.some((item)=>{
  return item>7;
});
console.log("Bigger than 7? ", biggerThan7);

// Check whether or not some of the minion's name lengths are 1 or above. 

const biggerThan1 = minionNameLengths.some((item)=>{
  return item>1;
});
console.log("Bigger than 1? ",biggerThan1);

// Lowercase Kevin's name again inside of the capitalizedMinions array.
capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toLowerCase() + capitalizedMinions[1].slice(1);

const checkIfSomeUpper = capitalizedMinions.some((item)=>{
  return item[0] === item[0].toUpperCase();
});
console.log("Some is upper?" , checkIfSomeUpper);

const checkIfSomeLower = capitalizedMinions.some((item)=>{
  return item[0] === item[0].toLowerCase();
});

console.log("Some is lower?" , checkIfSomeLower);
//////////////////////////////////////////////////////////////
// sort
//////////////////////////////////////////////////////////////

// write your own compareMinions function first to pass in as a callback to sort
// Use sort to order the minions within the capitalizedMinions array by order of name length.
const sortedMinions = capitalizedMinions.sort(
  function compareMinions(item1, item2) {
    return item1.length - item2.length;
  }

);

console.log("\n************ sort method ************\n");
console.log(sortedMinions);