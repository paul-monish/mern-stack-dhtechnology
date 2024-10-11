// var a=5;
// var b=6;
// var c=a+b;
// console.log(c);

// let a=5;
// {
//    let a=10;
//    console.log(a);
// }
// console.log(a);

// console.log(a);
// let a=5;
// const a=5;
// a=6;
// console.log(a);
/*
+,-,*,/,%,++,--,**
*/
// console.log(2**3);
/*
=,+=,-=,*=,/=,%=,**=
*/

// let a=5;
// a**=2;//a=a+1;
// console.log(a);

/*
==,!=,>,<,>=,<=,?
===,!==

*/
// a>5?'h':'l';

// let a=5;
// let b='5';
// console.log(a!==b);

// let t1="hello";
// let t2="world";
// console.log(t1+" "+t2);
// t1+=" world"
// console.log(t1);
/*
&&,||,!
*/
// let a="10";
// console.log((a>5)||(a<9));
// console.log(typeof a);

// let a=5;
// console.log(!(a<2));

/*
&,|,~,^,<<,>>
*/
// console.log(5<<2);
// console.log(20>>2);
// &&=
// x&&=y
// x=x&&(x=y)

// datatypes
// String,
// Number,
// Bigint,
// Boolean,
// undefined,
// Null,
// Symbol,
// Object,

// console.log(typeof null);
// console.log(typeof undefined);

//function
/*
void add(){

}
void add(int a){

}
int add(){
    return 0;
}
int add(a,b){
    return a+b;
}
*/

// function add() {
//   sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   console.log(sum);
// }

// add(5, 6, 4, 5);
// let add=function(a,b){
//     return a+b;
// }

// let add=(a,b)=>a+b;

// console.log(add(6,5));

// function add(...a){
//     console.log(a[1]);
// }
// add(5,6,7,8,9);

// let arr=[1,2,3,4];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log(...arr);

//object

// const person={}

// person.firstName="John";
// person.age=50;

// console.log(person);

// const person=new Object();

// person.firstName="John";
// person.age=50;

// console.log(person);

// Object literal
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// for (const [key, value] of Object.entries(person)) {
//   //   console.log(element[1]);
//   console.log(key, "=>", value);
// }

//  for (const a of Object.keys(person) ) {
//     console.log(person[a]);
//  }

//  for (const a of Object.values(person) ) {
//     console.log(a);
//  }

// const arr=[2,5,4,56];
// for(const a in person){
//     console.log(person[a]);
// }

// for(const a in arr){
//     console.log(arr[a]);
// }

// function Person(first, last, age) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.getFullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// Person.prototype.changeName=function(name){
//     this.firstName=name;
// }
// const a = new Person("John", "Doe", 50);
// const b = new Person("John1", "Doe1", 20);
// a.changeName("Shyam")
// console.log(a);
// console.log(b);

// console.log(person.getFullName());
// console.log(person["age"]);
// const x={...person};
// x.age=25;
// console.log(x);

// Object.defineProperty(person,"age",{writable:false})
// person.age=25;

// person.nationality="English";
// delete person["age"];
// console.log(person);

// const myObj={
//     name:"John",
//     age:30,
//     myCars:{
//         car1:"Ford",
//         car2:"BMW",
//     }
// }

// console.log(myObj.myCars.car1);
// console.log(myObj["myCars"]["car1"]);


//-------------String--------------------
// let str="abcd";
// console.log(typeof str);
// console.log(str.length);
// console.log(str[5]);
// console.log(str.charAt(-1));
// console.log(str.charCodeAt(-1));
// console.log(str.at(4));


let text="Apple, Banana, Kiwi";
// console.log( text.split(",")[1]);
// console.log(text.slice(-12,-6));
// console.log(text.substring(-12));
// console.log(text.substr(7,6));

// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

let t1="5";
let t2="Hello world! abc";

// console.log(t1.concat(" ",t2));
// console.log(t1.trim());
// console.log(t1.trimEnd());
// console.log(t1.trimStart());

// console.log(t1.padStart(3,"X"));
// console.log(t1.padEnd(3,"X"));

// console.log(t2.repeat(2));


// console.log(t2.replace("world","Anuj"));
// console.log(t2.replace(/World/ig,"Anuj"));

// console.log(t2.replaceAll("world","Anuj"));

// ---------search method-----------
// console.log(t2.indexOf("world",7));
// console.log(t2.lastIndexOf("world",11));

// console.log(t2.search("world"));
// console.log(t2.search(/world/));

// console.log(t2.match("world1"));
// console.log(t2.match(/world/));

// console.log(t2.includes("world",8));

// console.log(t2.startsWith("Hello"));
// console.log(t2.endsWith("abc"));


// let a=6;
// let b=6;
// let res=a+b;

// The addition of 5 and 10 is 15

// console.log("The Addition of "+a+" and "+b+" is "+res);


// console.log(`The Addition of  ${a} and ${b} is ${res}`);

// Number
// NaN
// let a=100/"ABC";
// console.log(a);
// console.log(isNaN(a));

let a="5";
let b="6";
let c=0;



if(a.trim().length==0 || b.trim().length==0){
    console.log("Please Enter Value!");
    return;
}
else{
    if(isNaN(5/a) || isNaN(5/b)){
        console.log("Please Enter Number!");
        return;
    }
    // c=Number(a)+Number(b);
    // c=parseInt(a)+parseInt(b);
    c=+a + +b;
}
console.log(c);









