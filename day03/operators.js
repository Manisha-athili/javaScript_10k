//  operations:
/*
    Arthmatical operations
    Assignment Operator:
    comparision oparators
    logical oparators
    ternary operator, nested ternary operator


 */



// Arthmatical operations
//  +
//  -
//  *
//  /
//  %
//  **
//  -- 
//  ++

var num1 = 10;
var num2 = 20;

// addition
console.log(num1+num2);

// sub
console.log(num1-num2);

// multiplication:
console.log(num1*num2);

// division
console.log(num1/num2);

// modulas(reminder)
console.log(num1%num2);

// exponentional
console.log(num1**num2);

// pre increment
console.log(++num1); //10+1

// post increment
console.log(num1++); //10 , 10+1

// Assignment Operator: assign values
/*
    a=10
    a += 10
    a -= 10
    a *= 10
    a /= 10
    a %= 10    10%a=1
    a===b  ==> strict equalto
*/

console.log(4%10); // 4 bcz it should not be less if it is less the same number will come

var a = 10;
console.log(a);

// 
console.log( a += 10);

// 
console.log( a -= 10);

// 
console.log( a *= 10);

// 
console.log( a /= 10);

// 
console.log( a *= 10);

// 
console.log( a %= 10);


// comparision oparators
/*
    <
    >
    >=
    <=
    ===
    !==
*/

// logical oparators
/*
    &&
    ||
    !
*/

var num1 = true;
var num2 = false;
var num3 = true;

console.log(num1&&num2);  //false
console.log(num1||num2); //true
console.log(num1&&num3); //true
console.log(num3&&num2); //false

// ternary operator::: it is used to assign a valuse to a varible based on the condition.
// a =(condition)?expression1if True:expression2 if False;

a=5;
b=(a/5==1)?console.log("it is true"):console("it is false");


// nested ternary operator:
c=7;
b=(c/5==1)?console.log("it is true"):(c%2==0)?console.log("even number"):console.log("odd number");

// temperature :: 20 cold  :    30 normal     :   50 hot
temp = 70;
console.log("----")
console.log(temp<=20?"cold":(temp<=30?"normal":(temp<=50?"hot":temp ,"is temperature")));


// string operator or concatnation "hello" + "world"  + is oparator always
console.log("hello" + " world"); 

console.log("10" - "20"); // -10  converts to int ------- typeconversion implicit conversions
console.log("10" - "hello"); // NaN  not a number
console.log("10" / "hello");
console.log("  " / "hello");


// types ::: implicit conversions and explicit conversions...

// explicit conversions: 
// String(a)
// Boolean(a)
// Number(a)

// input from user:: prompt("enter a number")

/**
 * turethy values::
 * non zero numbers,
 * non empty strings
 * true
 * arrays
 * objects,
 * functions,
 * 
 * falsy valuse::
 * 0
 * null
 * false
 * undefine
 * ""
 * NaN
 */