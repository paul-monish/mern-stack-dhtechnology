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
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

for (const [key, value] of Object.entries(person)) {
  //   console.log(element[1]);
  console.log(key, "=>", value);
}

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
