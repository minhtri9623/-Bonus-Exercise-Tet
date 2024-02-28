
/*

Toán tử ba ngôi

const x = 100;
let result;
if (x < 1000) {
    result = "nho hon 1000";
} else {
    result = " lon hon 10000";
}

rut gon cau truc if, else

const x = 100;
const result = (x < 1000) ? "nho hon 1000" : "lon hon 1000";

*/

/*
Shorthand Evaluated

let variable2;
if (variable1 !== null || variable1 !== undefine || variable !== '') {
    variable2 = variable1;
} else {
    variable2 = "";
}

rut gon

const variable2 = variable1 || "";

*/





/*

Variable declaration – If Comparison


let x;
let y;                                                
let z = 3;

rut gon --> let x, y, z = 3;

if (isTurnOn === true) --> if(isTurnOn)

*/





/*
For loop – For loop with decimal base

for (let i = 0; i < sampleArr.length; i++)
--> for (let item in sampleArr)


for (let i = 0; i < 1000000; i++){}

--> for (let i = 0; i < 1e5; i++) {}
# gia tri cac bieu thuc sau deu la true
1e0 === 1;
1e1 === 10;
1e2 === 100;
1e3 === 1000;
1e4 === 10000;
1e5 === 100000;
*/


/*
Object property


const x = 1, y = 2;
const obj = { x: x, y: y };

--> const x = 1, y = 2;
const obj = { x , y};
*/



/*
Rút gọn định nghĩa function(Sử dụng arrow function)

function sayHello(name) {
    console.log('Hello', name);
}
--> sayHello = name => console.log('Hello', name);

setTimeout(function () {
    console.log('Loaded')
}, 2000);
--> setTimeout(() => console.log('Loaded'), 2000);

list.forEach(function(item) {
    console.log(item);
});
--> list.forEach(item => console.log(item));


Implicit return (ẩn return đi bằng arrow function)

function getValue(ratio) {
    return ratio * 6.9;
}
--> getValue = ratio => ratio * 6.9
*/



/*
Set default value for parameter in function


function getValue(a, b, c) {
    if (a === undefined)
        a = 3;
    if (b === undefined)
        b = 4;
    return a * b + c;
}

--> getValue = (a, b = 3, c = 4) => (a * b + c);
*/




/*
Template list

const welcome = 'You have logged in as ' + first + ' ' + last '.'
Backtick ```
--> const welcome = 'You have logged in as ${first} ${last} .';
*/



/*
Destructuring Assignment


const action = require('lib/action')
const service = require('lib/service')

const form = this.props.form;
const errors = this.props.errors;
const entity = this.props.entity;
const controller = this.props.controller;
const component = this.props.component;

--> import { action, service } form 'lib';

--> const { form , errors, entity, controller, component } = this.props;
*/


/*
Spead Operator


// joining arrays
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd);

// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slide()
*/


/*
Constraint Param

function sample(param1) {
    if (param1 == undefined) {
        throw new Error('Thieu Tham So!');
    }
    return param1;
}

mandatory = () => { throw new Error('Thieu tham so!'); }

sample = (param1  = mandatory()) => param1

*/



/*
find() in arrays 

const emloyees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 35 }
]

function findEmp(name) {
    for(let i = 0; i < emloyees.length; ++i) {
        if(emloyees[i].name === name) {
            return emloyees[i];
        }
    }
}

const name = 'Emp A'
emp = findEmp(name)

--> const name = 'Emp A'
    emp = emloyees.find(item => item.name === name)

*/


/*
Object[key]
Để get property của object trong JS ngoài cách Obj.prop, còn có thể viết Obj['prop']. Nhìn qua thì dùng cả 2 cách đều cho kết quả như nhau. Tuy nhiên để viết được những đoạn code có thể tái sử dụng, thì cần sử dụng cách thứ 2 


function validate(fullname) {
    if(!fullname.firstName)
        return false;
    if(!fullName.lastName)
        return fales;
    return true;
}

console.log(validate({firstName: 'Duy', lastName: 'Buffet'})); // true
*/




/*
Object[key]

const rule = {
    firstName: {
        required: true
    },
    lastName: {
        required: true
    }
}

const validate = (rule, values) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!values[prop]) {
                return false;
            }
        }
    }
    return true;
}

console.log(validate(rule, {firstName: 'Duy'})) // false
console.log(validate(rule, {firstName: 'Duy', lastName: 'Buffer'})) // true
*/



/*
Bitwise NOT double

Math.floor(6.9) === 6 // true
--> ~~6.9 === 6 // true
*/






