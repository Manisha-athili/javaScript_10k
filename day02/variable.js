// variable : container to store data (any datatype)
// decleared with keyvar, let, const and automatic varible (js not supported in strict js) followed by varibles name (identifiers)
// `${}`==> string inter position

var name = "10k coders";
console.log(name);
// console.log(Name);  Case Sensitive

// identifier have some Rules ::
// 1. connt include special characters except underscore and $..... ect

var a ;  // declaration
a = 10;  // initialization

var a = 20;   //assignment
    a = 30;  // reassignment

var a = 20;
var a = 30;  // redeclaration of a 

// undefined :: a variable without a value (it is not error)
// not defined :: a varable is not defined (it is error js stops excuting)
// automatic variable

console.log(num); // undefined rather than not defined because of hoisting (only for var)
var num = 10;
console.log(num);

// HOISTING :: it is a behaviour in js where the declarations of the variable and functions are moves to the top even before the execition.
//  only declaration is moved to top but not  initatization.

// ------CASES
// debugger; is used to debug the code in broswer in 
var a = 10;
console.log(a);

 b = 20;
 console.log(b); //  automatic varibles

 c = 10;  // c undefined not error 
 console.log(c); 
 var c;  
 
// d = 10;  
//  console.log(d); 
//  let d; // error
 
 /*
 datatypes :: 
 1. Primitive datatypes
 2. non primitive datatypes

Primitive datatypes : 
 --datatypes which stores single values
 --store in stack
 --call by valuse and pase by value
 --immutable

 1)numder: 1, 2.0, 
 2)string:"",'',``
 3)undefined: varible without value
 4)null: empty value (mathimaticall operations are performed)
 5)boolean : Ture or false


 non primitive datatypes consicutive :
 -- multiple values
 --stores in heep
 --call by refrence and pass by refreance
 --mutable

 1) array:: collection of hetrogenous data
 2) object:: d
 3) functions::

 */
console.log("---------")
//  array
var a= [1,"hello",2,55]
console.log(a);
// access array by index
console.log(a[0]);

// object
 var b = { name: 'manisha' , id : 7, batchno : 202}
 console.log(b);
//  console.log(b[2]) it will not work...

// access values
console.log(b.name,b.id,b.batchno);

// typeof oparators 
console.log(typeof(a))
console.log(typeof(b));

var name = "code";
console.log(typeof(name));



