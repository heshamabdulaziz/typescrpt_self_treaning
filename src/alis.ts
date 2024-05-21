type   miix=(number|number[]|string|boolean);
let num10:miix=15;
num10="nmmnnn";
num10=[1,2,3]
console.log(num10);
type userData={
    id:number,
    name:string,
    age?:number,
    address:string
}
//  let user1:{
//     id:number,
//     name:string,
//     age?:number}={id:1,
//         name:"Hesham",
//         age:35}


let user1:userData={
            id:1,
            name:"Hesham",
            age:22,
            address:"3022 rue Allard"}
           user1.address="3023 rue Allard"
           
            console.log(user1);
            
    // interface 
     interface data{
    id:number,
    name:string,
    age?:number}
    
    
   
    interface data{
        address2:string,
    }
    let user2:data={
        id:1,
         name:"Hesham",
        age:22,
        address2:"3022"
    }
   
    console.log(user2);
    