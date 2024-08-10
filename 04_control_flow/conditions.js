//     if

const temperature = 45

if(temperature === 45){
//    console.log("executed");
}

if(temperature === 40){             //  check value and type
//    console.log("executed");
}else if (temperature <=50) {
 //   console.log("temperature less than 50");
} else{
//    console.log("temperature geater than 50");
}


 let score = 200
if(score > 100){
    let power = "Fly"                //  power variable is a block scope so it's not define outside.
 //   console.log(`User Power: ${power}`);
}
//  console.log(`user power: ${power}`);   

// if(score > 150) console.log("It's Right");   // This is implicit scope

const loggedIn = true
const debitCard = true

if(loggedIn && debitCard && 5 == 5){     //  All condition True for code runing.
 //   console.log("Allow to buy course");
}

const loggedInGoogle = true
const loggedInEmail = true
const google = false

if(loggedInGoogle || google || loggedInEmail){ 
   // console.log("User logged in");         //  Anyone condition True.
}

//++++++++++++++++++   TRUTHY  AND   FALSY    +++++++++++++++++++++++++

let email = ""
if(email){
//    console.log("logged in for email");
}else{
//    console.log("don't have user email");
}

//   falsy value
//  false , 0 , -0 , BigInt => 0n , null , undefined , NaN , "" 

//    truthy value
//  "0" , 'false' , " " , {}, [], function(){}, 
// false == 0 => true , false == "" => true , 0 == "" => true   !!

let myobj = {}
if(Object.keys(myobj).length === 0){
 //   console.log("My object is empty")
}

let myarr = []
if(myarr.length === 0){
//    console.log("My array is empty")
}


//   Nullish Coalescing Oparator (??): null , undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 15
val1 = undefined ?? 20
val1 = null ?? 25 ?? 30 
 //   console.log(val1)


 //    Terniary Operator

 //  condition ? true : false
  let price = 200
  price <= 150 ? console.log("Less than 150") : console.log("Grater than 150")