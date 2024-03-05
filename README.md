#  Basics of Javascript

#### JavaScript is a high-level, interpreted programming language that is primarily used to make web pages interactive and dynamic. It is a versatile and widely used scripting language that can be integrated into HTML to add behavior to web pages. JavaScript allows developers to create responsive and interactive user interfaces, handle events, and manipulate the Document Object Model (DOM) of a web page.

## What does Javascript Do?
 * JavaScript can read and write HTML elements.
 * Javascript gives HTML designers a programming Tool.
 * JavaScript can put dynamic text in to HTML page.
 * JavaScript can react to events.
 * JavaScript can be used to validate data.
 * Javascript can be used to detect the visitor' brwoser.
 * JavaScript can be used to create Cookies.

 ## JavaScript Variables
 Basically ,Variables are "containers" for storing the information. Javascript variables are used to hold values or expressions.
 A variable can have a short name, like 'x', or a descriptive name,like Carname.

 ### Rules for JavaScript variable names:
* Variable namesa are case sensitive (y and Y are two different variables).
* Variables names must begin with a letter or the underscore character.

 **Note**: Because JavaScript is case-sensitive, variable names are case-sensitive.

### Declaring ( creating) Javascript Variables
* Creating Javascript variables is  most often to referred as "declaring" variables.
* You can declare Javascript variables with the "var Statement".

#### Example:
```javascript
var x;
var carname;
```
After the Declaration shown above,the variabales are empty (they have no values yet). However, you can also  values to the variables when you declare them.
```javascript
var x=5;
var carname="Tata";
```
After the execution of the above statement,the variable **x** will hold the value of **5**, and the **carname** will hold the value of **Tata**.

**Note**: When u assign a text value to a variable, use quotes under the value.

### **Assigning Value to the  Undeclared Jaascript Variables**
If you assign values to the variables that have not yet been declared, the  variables will be automatically declared.

These statements:
```javascript
x=5;
carname="scorpio";
```
have the same effect as:
```javascript
var x=5;
var carname="Scorpio";
```
### **Redeclaring Javascript  Variables**
If you redeclare a Javascript variable, it will not loose its original value.
```javascript
var x=5;
var x;
```
After the execution of the above statements, the variable x will still have the  value of 5.The value of **x** will not reset when you redeclare it.

## Difference Between  let, var, const.

**var**: Before the introduction of let and const, var was the primary way to declare variables in JavaScript. The scope of a var variable is either the function in which it is declared (function scope) or the global scope if it's declared outside any function.

Example:

```javascript
function example() {
  if (true) {
    var x = 10;
    console.log(x); // Output: 10
  }
  console.log(x); // Output: 10
}

example();`
```

In the above example, the variable **x** is declared using var. It has a function scope, so it is accessible both inside and outside the if block. This behaviour is known as **hoisting**, where the variable declaration is moved to the top of the function. Therefore, even though **x** is declared inside the if block, it can still be accessed outside of it.

---

**let**: let was introduced in *ECMAScript 6 (ES6)* to address some of the issues with var. The scope of a let variable is limited to the block in which it is declared (block scope), which is typically denoted by a set of curly braces { }.

 Example:

```javascript
function example() {
  if (true) {
    let y = 20;
    console.log(y); // Output: 20
  }
  console.log(y); // ReferenceError: y is not defined
}

example();`
```

In the above example, the variable **y** is declared using let. It has block scope, which means it is only accessible within the block it's declared in (inside the if block). When we try to access **y** outside of the block, we get a *ReferenceError* because **y** is not defined in that scope. This behaviour helps prevent unintended variable leakage and makes the code easier to understand.

---

**const**: const is also introduced in ES6 and stands for "constant." Variables declared with const are block-scoped, just like let, but they have an additional characteristic, their value cannot be reassigned once it has been assigned. In other words, const variables are immutable.

Example:
```javascript
function example() {
  const z = 30;
  console.log(z); // Output: 30

  z = 40; // TypeError: Assignment to constant variable
}

example();
```

In this example, the variable **z** is declared using const. It is also block-scoped like let. However, the difference is that const variables cannot be reassigned once they are assigned a value. In the example, when we try to assign a new value to **z**, we get a *TypeError* because we are trying to modify a constant variable. This behaviour ensures that the value of **z** remains constant throughout the code, promoting immutability and preventing accidental changes.

---

To summarize:

- Use **var** if you want function-scoped variables that can be hoisted.
- Use **let** if you want block-scoped variables that can be reassigned.
- Use **const** if you want block-scoped variables that are constant and cannot be reassigned.

## What is Hoisting and how it works.
Hoisting is a behavior in JavaScript where variable and function declarations are moved or "hoisted" to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and funcitons are decalred within their scope,they are moved to the top of their scope regardless of  whether their scope is global or local.

The following is the  sequence in which variable declaration and initialization occurs:

<mark>Declaration >> Initialization/Assigning >> Usage</mark>

### Hoisting of Variables:
In the case of variable declarations only the declaration is hoisted not the initialization. This means that variable name is brought to the top of the scope, bu it's value is not assigned until the acutal line of code where the variable is initialized.

Example:
```javascript
console.log(x); //Output:undefined
var x=5;
console.log(x);  //output:5
```
* In the above example, the Variable **x** is declared using **var**.
* During the compilation the declaration **var x**  is moved to the top of the scope.
* The first console.log(x) prints undefined because the variable is declared but not yet assigned a value.
* The assignment **x=5** happens later and the second console.log(x) prints 5.


# Functions In Javascript:
 
  ## Arrow Funtions:

  **Functions** are one of the building blocks of JavaScript programming for creating web applications.

* You can think of functions as a way to group a set of instructions together and execute them as a single unit.

* Arrow functions are often assigned to variables and are anonymous (i.e., they don’t have a name).

* They were introduced in ECMAScript 2015 (ES6) and have become widely used due to their readability and simplicity.

* Arrow functions are especially useful for writing short, one-liner functions and for handling callbacks.


<mark> The syntax for creating a function in JavaScript is quite simple. Functions can take input in the form of parameters and can return a value or output.</mark>

In Javascript funcions may be anonymously defined using <mark>"arrow" (=>) </mark> syntax.

The simplest form of an arrow function is having arguments before the **"(=>)"** and the return value will be  after the **"(=>)"**.


### The basic syntax of an arrow function is as follows:


const functionName = (param1, param2) => {
    // Function body
    return expression;
};

### Here’s what each part means:

const functionName: Assigns the arrow function to a variable named functionName.

(param1, param2): The parameter list. You can have zero or more parameters.

=>: The  arrow that separates the parameters from the function body.

{ /* Function body */ }: The curly braces contain the code to be executed.

return expression: The value returned by the function.

### Some key Points


```javascript
item => item + 1; //function(item){return item+1}
```
The above function can be immediately invoked by providing argument to the expression.

```javascript
(item => item + 1)(41); //output: 42
```
If an arrow function takes an single argument, the parantheses around that argument are optional.
 
 Example:
 ```javascript
 const vehicle = car =>car + 1; 
 const car = (car)=>car + 1;
 ```
 The above expression assign the same type pf function into constant variables.

 However, the arrow function takes no parameters, or more than one parameters, a new set of parantheses must encase all the arguments.

 ```javascript
 (()=>"vehicle")() //Vehicle

((vehicle,car)=>vehicle+car)('BMW','CAR') //"BMW CAR"
```
If the function body doesn't consist of a single expression,it must be surrounded by brackets and use an explicit **return** statement for providing a result:

```javascript
(vehicle=>{
    const car = 25;
    return vehicle+car; 
})(1); //26 
```
If the arrow function's body consist only of an object literal, this object literal has to be enclosed in parantheses:

```javascript
(vehicle=>({car:1}))(); //object {car:1}
```
The extra paranthesis indicate that the opening and closing brackets are part of the object literal, i.e they are not delimiters of the function body.


 



 


#   U p l o a d M a s t e r D a t a 
 
 #   U p l o a d M a s t e r D a t a 
 
 