/* var abc = "aas";    //do not use var because of the issue in block and functional scope
console.log(1 !== true);
console.log(1 !== 8);
console.log(1 != true);
console.log(NaN !== NaN);
console.log(2**52) */

//+++++++++++++++++++++++++++++++++++++++++not in use++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//using apply method to call a method with different context
//objUser.showInfo.apply(objUser)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//slice returns piece of array and does not affect the original array
//splice returns piece of array and affects the original array
//to add 2 arrays can use concat but to 2 or more use spread operator
//convert string to array using ".from"
const str = "hello";
const strArr = Array.from(str);
console.log(strArr);

let arr1 = [1, 3, 4];
let arr2 = [5, 6, 7];
let arr = [...arr1,...arr2];
console.log(arr);


//singleton only gets created during constructor "object.create" is used to create constructor singleton
//object literal "const abc  = {}" creates an object with properties, methods are added as functions
//2 ways to use objects "console.log(abc.name)","console.log(abc["name"])" 
//use "object.freeze(abc)" if you want to make it immutable/no change to be done
// also can add a function inside the object
//const abc ={} ---non singleton
//const abc = new Object  ---singleton
// can add nested object in object
//const obj3 = Object.assign({},obj1,obj2)   ---add 2 or more object inside 1 object
// const obj1 = {...obj2, ...obj3} --- main add 2 or more object inside 1 object
// to access objects inside the arrays  we can use "object.values / object.entries / object.keys" inside console.log
// ifu want to see whether an object has a property or not  then use "Object.hasOwnProperty('nameOfProperty')" method

const mysym = Symbol("key")
const abc ={
    name: "John",
    age: 30,
    [mysym]: "key1",  //can access this property outside by calling obj[Symbol()]
    "last name": "Gon",
    isLoggedIn : false
}

console.log(abc.name)
console.log(abc[mysym])
console.log(abc["last name"])
abc.greeting = function(){
    console.log("Hello")
}
abc.greeting2 = function(){
    console.log(`Hello I am ${this.name}`)
}
console.log(abc.greeting());
console.log(abc.greeting2());

//object destructuring
const person = {firstName:"John", lastName:"Doe", age:50};
const {firstName, lastName ,age}=person;
console.log(firstName);
//this is how you can destructure the object

//function
function funcObj(a){
    if(!a){
        return "Please enter something"
    }
    else{
        return `${a} good`
    }
}
console.log(funcObj())
//console.log(funcObj(2))

//function wih object
const myObj = {
    name:"John",
    age:12
}

function objFunc(anyobject){
    //this refers to the object that called this function
    console.log(`${anyobject.name} and ${anyobject.age}`);
}
objFunc(myObj)

//function with array
const myArray  = ["apple","banana","orange"]
function accessArray(getArray){
    return getArray[2]
}
console.log(accessArray(myArray));




function one(){
    const name="John"
    function two(){
        const website = "W3school"
        console.log(`print this ${name}`);
    }
    //console.log(website);
    two()
}
one()

// console.log(x);
// x=4              // hoisting doesn't work during  declaration
hoist()          // only works during assignment
function hoist(){
    console.log("this is hoisting");
}

const objUser = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    showInfo: function (){
        console.log (`The user's name is ${this.firstName}`)    // this is used in current context  of the function

    }
}
console.log(objUser.showInfo())

//this keyword this has window object  as its default value in javascript browser
//when inside the  function it gets the value of this from where it was called or invoked
//calling a method on an object using dot notation
//objUser.showInfo();
//you can't use this in function and arrow function context


const  personify = () => {
    console.log("arrow function")
}

const add11 = () => {      //pure arrow function
    return 1+1;
}

const add21 = () => (1+1 )  //arrow function is also called implicit return since there is no need for  curly braces {} and return
const add2 = () => ( {age:21} )   //can also used for objects 
console.log(add2());

//Immediately Invoked Function Expression (IIFE)

(function iife(){
    console.log("this is hoisting");
})();

(() => {
    console.log("this is hoisting");
})();
