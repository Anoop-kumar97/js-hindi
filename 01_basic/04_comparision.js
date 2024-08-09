// console.log(null > 0)     //  false
// console.log(null == 0)    //  false
// console.log(null >= 0)    //  true

//   {  The reason is that equality check == and comparision < <= > >= work differently.
//      Comparisions convert null to a number, treating it as 0.
//      That's why (3) >= 0 is true and (1) null > 0 is false.           }

console.log("5" == 5)   // true
console.log("5" === 5)  // false
console.log( 5 === 5)   // true
console.log(5 == 5)     // true

//   (5 < 5)  => false
//   (5 <= 5) => true
//   (5 > 5) => false
//   (5 >= 5) => true
//   (5 != 5) => false
//   (5 != 3) => true
