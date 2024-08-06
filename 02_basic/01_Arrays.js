const myArr = [0,1,2,3,4,5]
const myHeros = ["hatim","shaktiman","balveer"]
const myArr2 = new Array(2,4,6,8)

// console.log(myArr)
// console.log(myHeros)
// console.log(myArr2)

//        Array Method

// myArr.push(6)        //  add a value last in array
// myArr.push(7)
// myArr.pop()         //  delete a value last in array
// myArr.shift()       //  delete a value start in array
// myArr.unshift('start')  //  add a vlaue start in array
// console.log(myArr.includes(10))
// console.log(myArr.indexOf('start'))   //  indexOf start to 0
// console.log(myArr)

const newArr = myArr.join()  //  join change the type, and convert to string
// console.log(newArr)
// console.log(typeof newArr)


//   slice / splice

const mynA1 = myArr.slice(1,3)  // received a copy in array and last range are not include
// console.log("A",myArr)
// console.log(mynA1)
// console.log("B",myArr)

const mynA2 = myArr.splice(1,3)  //  manipulate original Array  and last range include
// console.log("C", myArr)        
// console.log(mynA2)


