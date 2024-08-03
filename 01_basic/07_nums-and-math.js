let score = 400
  console.log(score)

let balance = new Number(500)
console.log(balance)

console.log(balance.toString().length); //   num.  prototype mathod
console.log(balance.toFixed(2))

let otherNum = 251.8936
 console.log(otherNum.toPrecision(4))

let hundred = 10000000
  console.log(hundred.toLocaleString('en-IN'))  //  count for zero in indian system.
 
// Number All mathods inquary ( Number. in console and show all mathods ) || And search full information "MDN" ..


//   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                 //            MATHS

    console.log(Math)
    console.log(Math.abs(-4))
    console.log(Math.round(8.7))
    console.log(Math.round(8.3))
    console.log(Math.floor(7.9))
    console.log(Math.ceil(7.2))
    console.log(Math.max(2,3,4,7,9,4))
    console.log(Math.min(2,3,4,7,9,4))

    console.log(Math.random())    //  value under 0 to 1 || ex. 0.324897489 / 0.98234526
    console.log((Math.random()* 10) + 1 )  // value under 1 to 10 || ex. 9.23782872 , 3.835923445
    console.log(Math.floor(Math.random()* 10) + 1 )  // fixed value under 1 to 10 || ex. 6 , 9 , 2
    
  const max = 20
  const min = 10

  console.log(Math.floor(Math.random() * (max - min + 1)) + min)