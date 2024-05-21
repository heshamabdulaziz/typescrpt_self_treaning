"use strict";
console.log("hesham  abdulaziz hesham abdullah aaaa");
let num1 = 5;
num1 = "gggg";
let num2 = new Date();
let num3 = true;
let cars = ['', '', 14, new Date(), true, [10, 15]];
let user = [];
var num4;
console.log(num2);
console.log(cars[5][1]);
user.push("HESHAM");
user.push(5);
user.push("ABDULAZIZ");
user.push(22);
console.log(user[2]);
console.log(user[user.length - 1]);
console.log("@@@@@@@@**** map *****@@@@@@@@@@@");
user.map((e, index) => {
    console.log(e);
});
function sum(x, y) {
    return x;
}
function sum2(x, y) {
    console.log(x + y);
}
const arrow_f1 = (x, y) => {
    console.log(x * y);
};
const arrow_f2 = (x, y) => {
    return x % y;
};
console.log(sum(7, 2));
console.log("############");
sum2(5, 5);
console.log("***********arrow_f:void*****************");
arrow_f1(5, 5);
console.log("***********arrow_f2:arrow*****************");
arrow_f2(55, 5);
let obj = {
    id: 1,
    name: "HESHAM",
    data: { sub1: "hesham", sub2: "abdulaziz" }
};
let s = 'L';
let a = ["hesham", 22, 33, 'eee'];
let b = ['ddd', 12, new Date()];
console.log("***********define the object*****************");
let x = "20";
console.log(obj.name);
console.log(obj.data.sub1);
console.log(obj.data.sub2);
console.log("***********USING MAP TO PRINT ARRAY*****************");
b.map((item, index) => { console.log(item); });
console.log("***********array_from_object*****************");
let student = [
    { id: 1, name: 'student1', age: 12 },
    { id: 1, name: 'student2', age: 13 },
    { id: 1, name: 'student3', age: 14 },
    { id: 1, name: 'student4', age: 15 },
    { id: 1, name: 'student5', age: 16 },
    { id: 1, name: 'student6', age: 17 },
];
console.log(student);
student.map((item, index) => {
    console.log(item.id + "  " + item.name + "   " + item.age);
    console.log("PRINT WITH using ES6");
    console.log(`${item.id}     ${item.name}       ${item.age} `);
});
console.log("*********** interface  practice  *****************");
let obj3 = {
    id: 20,
    name: 'hesham Abdulaziz',
    country: 'CANADA',
    address: '3022 Rue ALLARD',
    // func(str) {
    //     return` WELECOME ${str}`;
    // },
};
console.log(obj3.id + "  " + obj3.name + "   " + obj3.country + "   " + obj3.address + "    "
//+obj3.func(obj3.name) 
);
console.log("*********** Extend from interface    *****************");
const profile_info = {
    image: "imageee"
};
console.log("*********** CLASSES IN TYPSCRIPT   *****************");
class car {
    //color:string;
    constructor(color) {
        this.color = color;
        //this.color=c;
        console.log("THE COLOR OF CAR IS" + color);
    }
    speed(s) {
        console.log("THE Speed Of is" + s);
    }
}
class Ford extends car {
    constructor(num, color2) {
        console.log("Ford model    " + num);
        super(color2);
        this.num = num;
    }
}
const bmw = new car("Reeeeed BMW ");
bmw.speed(140);
const f = new Ford(2022, 'gray Ford');
f.speed(400);
f.speed('400');
console.log(bmw.color);
