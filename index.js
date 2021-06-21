//chapter 2, program structure

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

//loop 2^10
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//for loop 2^10
let resultloop = 1;
for (let counter = 0; counter < 10; counter++) {
  resultloop = resultloop * 2;
}
console.log(result);

/*prompt loop
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);*/

for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

//break statement
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

//switch
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}

//excersises chap 2
function triangle() {
  for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
  }
}

function fizzBuzz() {
  for (let num = 0; num <= 100; num++) {
    let output = "";

    if (num % 3 === 0 && num % 5 != 0) output += "Fizz";
    if (num % 5 === 0 && num % 3 != 0) output += "Buzz";
    if (num % 5 === 0 && num % 3 === 0) output += "FizzBuzz";
    console.log(output || num);
  }
}

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);

//chapter 3, functions

//nested scope
let factor = 2;
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

/*functions as values
let launchMissiles = function () {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function () {
    do nothing
  };
}*/

//declaration (order)
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
//arrow functions
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

//excersises chap 3

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
