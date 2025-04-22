js : js is a lightweight, single thread ,highlevel interprited , scripting programming language . which is used to create a dynamic web pages

lightweight: Jit(balance b/w interprutation(read code line bu line ) and compalation(code into binary)) compiled programming lang with1st class funtions

DATA TYpes :
1. numbers - int
2. strings - '' -  
3. boolean - t/f
4. array --- [1,3,4,5,6]
5.  null - (odj)
    typeof(null)
    'object'
6. undefined -(not error)
    typeOf(undefined)
    undefined
7. Objects
8. symbol es6, redge

HOSTING : default technice or behaviour where a varible or function declaration moves to top of their scope even before the execition.

declaration --> var a
initia --> a = 10
assignment --> var a = 10 
re assignments -->   a = 30
 redeclaration -- > var a = 20

types of declaring varibles : using 3 keyword
1. var - (function scope: work within function - hosting)

2. let -(block scope: ES6 : temperial dead zone, redeclaration is not done)

2. const -(block scope: ES6 : temperial dead zone , no)

<!-- ==  or === -->
== (loose equal to): compare the values independent of their type "1" == 1 // true
===(Strict equal to): compares the values and their types also if they are equal only it returns true... "1" === 1 // False

<!-- comments in js -->
1. single line  == //
2. muiltline comments == /*    */

<!-- typeof()-->
used to determind the type of the varible or expression 
typeof(null) // object
typeof(true) // bool
typeof([]+[]) // string
typeof({} + []) // 'string'
typeof(NaN) // number

Nan not a number : is a value returned a math operation cannot produce meaningfull result
re = parseInt("ifj")
console.log(re)

operators :::
1 arthematical opertors
2. logical operator
3. terinary operator
4.++a,a++ --a,a-- unary operator
5. swift operato
6. binary operators

1. type conversions : manually convertes
    explicit type casting.-- input(str) ==> parseInt("")
    Number(), String(), and Boolean()
2.  Coercion type : automatic log({}+[]) // string
a = 1 + "a"
console.log(a) // 1a

condition : 

switch : is used to perform operation based onthe matching case
switch statement evaluates an expresstion based on the matching case

1. alter to long else-if chain
let consider a ex :
let grade =B
let result 
switch (grade):
    case A :
        console.log("super");
        break;
    case B :
        console.log("avg");
        break;
    case C :
        console.log("below");
        break;
    default:
        console.log("error/// invaild input")

<!-- Clousers -->

clouser is a funtion inside another function where the variables of lexical scope can be accessed even after completeing excutution

2 functions unai inner(clousers), outer bez outter function yokka varibles nii inner function lopala kuda access cheskovachu , so lopala lopala kotukondi , titukondi but lopale not outside 
Closures are useful for creating private variables that cannot be modified directly from outside.

When a function is defined inside another function, it forms a closure. The inner function retains access to the variables of the outer function even after the outer function has finished executing.

taking our class(outer) , 28 29 classes(inner function) as consideration :
research sheet can be accesed to 28, 29 not for others

<!-- this keyword -->
is used to refer an obj in which methods is called or function invoked

<!-- null and undefined -->
null -kavvali ani evvkapovadam , not initzating the value intenstionally 
undefined _ declare chestam but value evvamu (abance if declared value)








