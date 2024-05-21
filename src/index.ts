console.log("hesham  abdulaziz hesham abdullah aaaa");
let num1:(number|string)=5;
num1="gggg";
let num2:Date=new Date();
let num3: boolean=true;
let cars:[string,string,number,Date,boolean,number[]]=['','',14,new Date(),true,[10,15]]
let user:(string|number)[]=[];
var num4;
console.log(num2);
console.log(cars[5][1]);
user.push("HESHAM");
user.push(5);
user.push("ABDULAZIZ");
user.push(22)
console.log(user[2])
console.log(user[user.length-1]);
console.log("@@@@@@@@**** map *****@@@@@@@@@@@");
user.map((e:(string|number),index):void=>{
    console.log(e);
})
function sum(x:number|string,y:number):(number|string){
    return x;
    
}

function sum2(x:number,y:number):void{
    console.log(x+y);
    
}

const arrow_f1=(x:number,y:number):void=>{
    console.log(x*y);
    
}
const arrow_f2=(x:number,y:number):number=>{
    return x%y;
    
}

console.log(sum(7,2));
console.log("############");
sum2(5,5);
console.log("***********arrow_f:void*****************");
arrow_f1(5,5);
console.log("***********arrow_f2:arrow*****************");
arrow_f2(55,5);
type userdata={
    id:number,
    name:string,
    country?:string,
    data:{sub1:string,sub2?:string}

    }

let obj:userdata={
    id: 1,
    name:"HESHAM",
   data:{sub1:"hesham",sub2:"abdulaziz"} 
}

type mix=number|string|boolean;
type size='S'|'L'|'XL';
let s:size='L';
type c1=[string,number,Date];

let a:(string|number)[]=["hesham",22,33,'eee'];
let b:c1=['ddd',12,new Date()];
console.log("***********define the object*****************");
let x:mix="20";
console.log(obj.name); 
console.log(obj.data.sub1); 
console.log(obj.data.sub2);
console.log("***********USING MAP TO PRINT ARRAY*****************");
b.map((item:(string|number|Date),index:number):void=>{console.log(item)});
console.log("***********array_from_object*****************");
type array_from_objects={id:number,name:string,age:number}[];
let student:array_from_objects=[
    {id:1,name:'student1',age:12},
    {id:1,name:'student2',age:13},
    {id:1,name:'student3',age:14},
    {id:1,name:'student4',age:15},
    {id:1,name:'student5',age:16},
    {id:1,name:'student6',age:17},
]
console.log(student)
student.map((item:{
    id: number;
    name: string;
    age: number;
},index:number):void=>{
    console.log(item.id+"  "+item.name +"   "+item.age );
    console.log("PRINT WITH using ES6" );
    console.log(`${item.id}     ${item.name}       ${item.age} `);

});
console.log("*********** interface  practice  *****************");
interface info{
    id?:number,
    name?:string,
    country?:string,

    }
    interface info{
        address?:string;
       // func?(s?:string):string;
        }
    let obj3:info={
        id:20,
        name:'hesham Abdulaziz',
        country:'CANADA',
        address:'3022 Rue ALLARD',
        // func(str) {
        //     return` WELECOME ${str}`;
        // },

    }
    console.log(obj3.id+"  "+obj3.name +"   "+obj3.country +"   "+obj3.address+"    "
    //+obj3.func(obj3.name) 
    );

    console.log("*********** Extend from interface    *****************");
    interface profile extends info{
        image:string;
    }
 
const profile_info:profile={
    image:"imageee"
}

console.log("*********** CLASSES IN TYPSCRIPT   *****************");

class car{
    //color:string;
   constructor(public color:string){
    //this.color=c;
       console.log("THE COLOR OF CAR IS"+color);
       
   }
 public speed<t=number>(s:t):void{
    console.log("THE Speed Of is"+s);
   }
}
class Ford extends car{
  
constructor(public num:number,color2:string){

    
        console.log("Ford model    "+num);
        super(color2);
    }

}
const bmw:car=new car("Reeeeed BMW ");
bmw.speed(140)
const f:Ford=new Ford(2022,'gray Ford');
f.speed(400);
f.speed<string>('400');

console.log(bmw.color)