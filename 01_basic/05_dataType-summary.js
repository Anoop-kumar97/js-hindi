//      PRIMITIVE
//      7 Type : String, Number, Boolean, Null, Undefined, Symbol, BigInt

   const score = 90.55              // number
   const logIn = false              // boolean
   const outsideTem = null          // null
   const mailId = "abc@123"         // string
   let user;                        // undefined

  const id = Symbol('123')
  const anotherId = Symbol('123')
        console.log( id === anotherId)     // it's not same value

  let bigNum = 98756483939397565n
   console.log(typeof bigNum)              //  bigint

//     NON PRIMITIVE  ( Reference )
//    3 Type : Array, Objects, Functions     ====    everyone datatype / typeof - object Function 

let heros = ["shaktiman","hatim","balveer"]

 let info = {
      name: "anoop",
      city: "bharatpur",
      age: 25
 }

 let myfunc = function(){
      console.log("hello world")
 }
 myfunc();

 //  All datatype check  ==>     https://262.ecma-international.org/5.1/#sec-11.4.3

 