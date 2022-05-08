
//-----1. Access Multi-Dimensional Arrays With Indexes:
//-----Using bracket notation select an element from myArray such that myData is equal to 8.-----
var myArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(myArr[2][1]);


//-----2. Manipulate Arrays With push()------------------------------------------------------
var arr1 = [1, 2, 3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push("dog");

arr1.push("dog", 1)
console.log(arr1);
console.log(arr2);


//-----------3. Manipulate Arrays With pop():---------------------------------------------
var num = [1, 2, 3, 4];
var removeNum = num.pop(4);
console.log(removeNum);
console.log(num);


//-----------4.Manipulate Arrays With shift():----------------------------------------------
var num = [1, 2, 3, 4];
var removeNum = num.shift();
console.log(removeNum);
console.log(num);


//----------5.Manipulate Arrays With unshift():--------------------------
var num = [1, 2, 3, 4];
var added = num.unshift("Paul", 35);
console.log(added);
console.log(num);


//----------6. Shopping List:------------------------------------------------------
var myList = [["apple", 5], ["ball", 3], ["cap", 2], ["doll", 8], ["elephant", 0]];
console.log(myList);


//------------7. Write Reusable JavaScript with Functions:-------------------------
function functionName() {
  console.log("Hi World");
}
functionName();


//-------------8.Passing Values to Functions with Arguments:------------------------------------
//-------------9. Global Scope and Functions:----------------------------------------
var myGlobal = 9;
function theFunc(oopsGlobal) {
  var oopsGlobal = 5
  return;
}
//console.log(oopsGlobal);
console.log(myGlobal);


//------------10. Local Scope and Functions:---------------------------------------
function myLoacalScope() {
  var myvar = "bfhbf";
  console.log(myvar);

}
myLoacalScope();
//console.log(myvar);


//-------------11. Global vs. Local Scope in Functions:---------------------------------
var someVar = "Hat";
function outfit() {
  var someVar = "sweater";
  return someVar;
}
console.log(someVar);
console.log(outfit());


//------------- 12. Return a Value from a Function with Return:----------------------------
function timesFive(num) {
  return num * 5;

}
var ans = timesFive(45);
console.log(ans);


//--------------13.Understanding Undefined Value returned from a Function:---------------------------
var sum = 0;
function addFive(num) {
  sum = sum + num;
}
console.log(addFive(5));


//--------------14.  Assignment with a Returned Value:----------------------------------
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


processed = processArg(7);


//------------------15. Stand in Line:---------------------
function nextInLine(arr, item) {
  // Your code here
  array = [];
  array.shift(arr);
  array.push(item);
  return arr;  // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


//--------------------16. Understanding Boolean Values:------------------------------
function welcomeToBooleans(bool) {

  // Only change code below this line.

  return false; // Change this line

  // Only change code above this line.
}

function welcomeToBooleans() {

  // Only change code below this line.

  return true; // Change this line

  // Only change code above this line.
}


//--------------17. Use Conditional Logic with If Statements:---------------------
function ourFunction(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.

  if (wasThatTrue) return "Yes, that was true";

  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);


//---------------18. Comparison with the Equality Operator:-------------------
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);



//-------------------19. Comparison with the Equality Operator:--------------------------
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not equal";
}
// Change this value to test
testEqual(10);


//---------------20. Comparison with the Strict Equality Operator:---------------------
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);