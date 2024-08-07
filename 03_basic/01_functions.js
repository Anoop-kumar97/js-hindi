
function myName(){
    console.log("Anoop");
    console.log("Fauzdar");
    console.log("Gazipur");
    console.log("Nadbai");
    console.log("Bharatpur"); 
}
//  myName();


// function sum(a,b){
//     console.log(a+b); 
// }
// sum(5,3);
// sum(5,"3");    //   it's value => 53 , first number and second string

function sum(a,b){
  //  let Result = a + b
  //  console.log("Anoop")      //   before allow 
  // return Result;
    return  a + b 
    console.log("Fauzdar")   //   after return => unreachable code
}

const result = sum(6,8)
//  console.log("Result: ",result);


// function loginUser(userName){
//     return`${userName} just login`
// }

// console.log(loginUser("Anoop"))
// console.log(loginUser());         //  empty value for undefined



function loginUser(userName = "Fauzdar"){
    if(userName === undefined){
       console.log("Please enter a user name");        
       return
    }
    return`${userName} just login`
}
// console.log(loginUser());     //  empty value for "Fauzdar" , and define value overright 
// console.log(loginUser("Anoop")); 



function cartPrice(val1,val2,...num){           //   (...num) it's rest method /  spread 
    return  num                                 // rest method collect all values
}                                               // val1,val2 collect value and other value for num
//   console.log(cartPrice(200,300,400,500,700,550))    



const user = {
    username: "Anoop",
    price: 399
 };

function handleObject(anyObj){
    console.log(`UserName is ${anyObj.username} and Price is ${anyObj.price}`);
};
 //handleObject(user)

//    handleObject({
//     username: "Fauzdar",
//     price: 599
//  });




 const myArr = ["hatim","balveer","nagraj","shaktiman"];

 function handleArray(getarr){
        return getarr[2]
  };
//  console.log( handleArray(myArr));
console.log(handleArray(["Ram","Krishna","Vishnu","Shiv"]));
