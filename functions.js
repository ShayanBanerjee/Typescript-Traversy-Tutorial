//Simple JS can be included
// function getSum(num1,num2){
//     return num1+num2;
// }
// console.log(getSum(1,4));
function getSum(num1, num2) {
    return num1 + num2;
}
//console.log(getSum(1,4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
// console.log(mySum('3',4));
// ? makes it optional to be provided by user..in that case returns undefined
function getName(firstname, lastname) {
    if (lastname == 'undefined') {
        return firstname;
    }
    return firstname + ' ' + lastname;
}
// console.log(getName('shayan','banerjee'));
function myVoid() {
    return;
}
