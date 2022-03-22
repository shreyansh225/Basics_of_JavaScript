// (let) has block level scope within a curley braces os a function the scope is there; can only create a temporary variable; (Good for memory management)
// (const) a constant that cannot be changed 
// var is used in the old javascript standerd ..now we should use let
let ex = 0;
const ac = 0; 
// ac = ac + 1;  // will throw error ( Assignment to constant variable. )

// Section 1. Ways to print in JavaScript----------------------------------------------------------------------------
//alert("me");
//document.write("This is doc");

// Section 2. Javascript console API----------------------------------------------------------------------------------
//console.log("Hello JS World", 4+6 , "Another log");
//console.warn("This is a warning");
//console.error("This is a console error");

// Section 3. JavaScript Variables--------------------------------------------------------------------------------------
// Variables are Containers to store data values
var number1 = 40;
var number2 = 150 ;
//console.log(number1+number2);

// Section 4. Data types in JavaScript-----------------------------------------------------------------------------------
// Numbers
var num1 = 555;
var num2 = 76.80;

// String
var str1 = "This is a String";
var str2 = 'This is salso a string' ; 

// Objects
var marks = {
    rahul: 34,
    Shreyansh: 80,
    Shovik: 78.977
}
//console.log(num1,num2,str1,str2,marks);

// Booleans
var a = true;
var b = false;
//console.log(a , b);

var und = undefined; // even if we dont assign any value to it...by default the variable is undefined
//console.log(und);
/*
At a very high level there are 2 types of data type in JS
1. Primitive data type : undefined, null, number, string, boolean, symbol
2. Reference data type : Arrays and Objects
*/

var arr = [1, 2, 3, "Babu Shona", 4, 5]           // console.log(arr[0]) = 1
//console.log(arr);

// Section 5. Operators in Javascript ---------------------------------------------------------------------------------------------
var a = 50;
var b = 40;

// Arithmatic operators
// console.log("The value of a + b ", a+b);
// console.log("The value of a - b ", a-b);
// console.log("The value of a * b ", a*b);
// console.log("The value of a / b ", a/b);

// Assignment operators
var c = b;
c += 2;  // c = c + 2
// console.log(c);

// Comparison operators
// console.log(a == b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a > b);
// console.log(a < b);

// Logical Operators

// console.log( true && true);              // Logical And
// console.log( true && false);
// console.log( true || true);             // Logical OR
// console.log( true || false);
// console.log(!true);                   // Logical Not


// Section 6. Function in Javascript ---------------------------------------------------------------------------------------------

// Functions help in implementing the dry principal (DRY = Do Not Repeat Yourself)
function avg(a,b) {
    return ( a + b )/2 ;
}

c1 = avg(4,6);
c2 = avg(14, 16);
//console.log(c1,c2);

// Section 6. Conditionals in Javascript ---------------------------------------------------------------------------------------------
 var age = 8;
 if(age > 10){
//     console.log('you are not a kid');
}
else if(age > 5 && age < 10){
//     console.log(' u still qualify as a kid ')
}
else{
//     console.log("u are a kid");
}


// Section 7. Looping in Javascript ---------------------------------------------------------------------------------------------
// For Loop
var arr = [1,2,3,4,5,6,7];
for( var i = 0; i < arr.length ; i++)
{
    // console.log(arr[i]);
}

// For each
arr.forEach(function(element){
    //console.log(element);
})


// While loop
let j = 0;
while( j < arr.length ){
    //console.log(arr[j]);
    j++;
}


// Do While loop    Runs atleast once even if the condition is true or not
let w = 0;
do{
    //console.log(arr[w]);
    w++;
}while( w < arr.length);

// break - break the loop
for( var i = 0; i < arr.length ; i++)
{
    if( i == 2){
        break;      // will end the looping when i reaches 2 and will break
    }
    //console.log(arr[i]);
}

// continue - leave the current itration and move on to the next iteration
for( var i = 0; i < arr.length ; i++)
{
    if( i == 2){
        continue;      // will not iterate for when i=2 and not display arr[2]=3 and will continue to next iteration
    }
    //console.log(arr[i]);
}


// Section 8. Array methods in JS  ----------------------------------------------------------------------------------------------------------
// Refer - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let myarr = ["Fan", "Camera" , 35 , null , true];
// console.log(myarr.length);
// console.log(myarr.pop());
// console.log(myarr);

// myarr.push("Shreyansh");
// console.log(myarr);

// myarr.shift()  // removes the first element from array
// console.log(myarr);

// myarr.unshift("Bhaiya");     // adds to the first element position in array
// console.log(myarr);

// const newLen = console.log(myarr.unshift("Gupta"));   // will return the length of the array
// console.log(myarr);

// console.log(myarr.toString());      // converts the whole array into a string

// myarr.sort();
// console.log(myarr);


// Section 9. String Methods in JS -----------------------------------------------------------------------------------------------------
let myStr = "Shreyansh is a good good good Professional";
// console.log(myStr.length);
// console.log(myStr.indexOf("good"));        // will return the first index of good
// console.log(myStr.lastIndexOf("good"));   // will return the last index or the last occurance of good

// console.log(myStr.slice( 0 , 3));  // ( x, n)   will return from x to n-1
// console.log(myStr.replace("Shreyansh", "Rahul"));     // ( to Change with , to Change)



// Section 10. Dates in JS -----------------------------------------------------------------------------------------------------

let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());       // Sun 0 , Mon 1, Tue 2, Wed 3, Thu 4, Fri 5, Sat 6
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// Section 11. DOM Manipulation in JS ############################################################################################################

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container")   // gebcn
console.log(elemClass);
//elemClass[0].style.background = "yellow";

elemClass[0].classList.add("bg-sample");   
elemClass[0].classList.add("text-danger");     // will make font red coz of the css in .html file....
elemClass[0].classList.remove("text-danger");   // will remove the class name and make the font back to normal

// console.log(elem.innerText);
// console.log(elem.innerHTML);
// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);

tn = document.getElementsByTagName('div');
console.log(tn)

let createdElement = document.createElement('p');    // child class
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);

let createdElement2 = document.createElement('b'); 
createdElement2.innerText = "this is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element);  ---->  removes an element


// Section 12. Selecting using Query in JS ############################################################################################################

sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);


// Section 13.  Events in JS ############################################################################################################

// function clicked(){
//     console.log("The button was clicked");
// }

// window.onload = function (){
//     console.log("document was loaded");
// }

//                               event
// firstContainer.addEventListener('click' , function(){          // as soon as u click the button ...this event gets displayed in console
//     document.querySelectorAll('.container')[1].innerHTML = "<b>  We Have Clicked in Container area </b>";
//     console.log("Clicked on Container ");
// })

// firstContainer.addEventListener('mouseover' , function(){            // as soon as u enter the container region ...this event gets displayed in console
//     console.log("Mouse on Container ");
// })

// firstContainer.addEventListener('mouseout' , function(){            // as soon as u move outside the container region ...this event gets displayed in console
//     console.log("Mouse went outside Container ");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;     // the innerHTML that we wrote in index.html gets saves in the variable 

// firstContainer.addEventListener('mouseup' , function(){            // as soon as mouse click was released in the container region ...this event gets displayed in console
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouseup in  Container ");
// })

// firstContainer.addEventListener('mousedown' , function(){            // as soon as mouse is being clicked down in the container region ...this event gets displayed in console
//         document.querySelectorAll('.container')[1].innerHTML = "<b>  We Have Clicked in Container area </b>";
//     console.log("Mousedown in  Container Click is being long pressed and hold until released  ");
//  })



 // Section 14. Arrow functions in JS ############################################################################################################

function sum( a , b ) {
    return a+b;
}

// function name = ( parameters ) => {}
sumA = ( a , b ) => {
    return a+b ;
}

// logKaro = () => {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval fired</b>"
//     console.log("i am ur log");
// }

// //SetTimeOut  and Setinterval
// setTimeout( logKaro , 2000);  // will run after 2 seconds but only once

// let stopKaro  = setInterval( logKaro , 2000);  // will run in every 2 seconds until we write clearInterval(stopKaro)  in console

// clearTimeout(stopKaro);          // use clearInterval / clearTimeout to cancel setInterval/setTimeout

// JavaScript Local Storage
localStorage.setItem('name', 'Shreyansh');
localStorage.getItem('name');
localStorage.clear();   // clear the complete local Storage
//localStorage.removeItem('name');


// JSON   
// JSON Standards require double quotes 

obj = {name: "Shreyansh Gupta", length: 1, a: {this: 'tha\"t'}} ;   // object within an object.....
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso);
let parsed = JSON.parse(`{"name": "Shreyansh Gupta", "length": 1, "a": { "this" : "that"}}`);
console.log(parsed);


// Template Literals  - Backtics

a = 34;
console.log(` this is my ${a}`);





















