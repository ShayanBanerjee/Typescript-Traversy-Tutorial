// console.log('hello from ts');
let myString : string;
let myNum : number;
let myBool : boolean;
let myVar : any;

//arrays
let strArr : string[];
let numArr : number[];
let boolArr : boolean[];

//array way 2
let strArr2 : Array<string>;
let numArr2 : Array<number>;
let boolArr2 : Array<boolean>;

let strNumtuple : [string,number];

let myVoid : void = undefined;
let myNull : null = null;
let myUndefined : undefined = undefined;


myString = 'Hello '.slice(0,3)+ ' ' + 'World';
myNum = 22;
myBool = true;
myVar = 'hello';

strArr = ['hello','world'];
numArr = [1,2,3];
boolArr = [true,true,false,true];

strNumtuple = ['hello',4];

console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myVar);

console.log(strNumtuple);
console.log(myVoid);