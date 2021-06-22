//excersises chap 2

//print triangle
function triangle() {
  for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
  }
}

//divisable by 3, 5 or both
function fizzBuzz() {
  for (let num = 0; num <= 100; num++) {
    let output = "";

    if (num % 3 === 0 && num % 5 != 0) output += "Fizz";
    if (num % 5 === 0 && num % 3 != 0) output += "Buzz";
    if (num % 5 === 0 && num % 3 === 0) output += "FizzBuzz";
    console.log(output || num);
  }
}

//nested loop, create chessboard
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

//chapter 3

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

//excersises chap 3

//return min value of two arguments
function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

//check if number is even
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

//count character
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

//count Bs
function countBs(string) {
  return countChar(string, "B");
}

//chapter 4

//create array from start and end numbers
function range(start, end) {
  var arr = [];
  if (start < end) {
    for (var i = start; i <= end; i++) arr.push(i);
  } else {
    for (var i = start; i >= end; i--) arr.push(i);
  }
  return arr;
}

//get the value of numbers in array
function sum(arr) {
  let total = 0;
  for (let value of arr) {
    total += value;
  }
  return total;
}

console.log(sum(range(1, 10)));

//reverse array (return new array)
function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

console.log(reverseArray([1, 2, 3]));

//reverse array (return same array)
function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

//create list from array
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

//create array from list
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

//add element to the front of list
function prepend(value, list) {
  return { value, rest: list };
}

//return element at given position (n)
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));

//deep equal comparison
function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
