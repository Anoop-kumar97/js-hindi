
// const coding = ["js", "ruby", "cpp", "py"]

// const values = coding.forEach( (item) => {
//   //  console.log(item)                    
//     return item
// })                                // Don't give Return Value inside forEach.Not print a value
// console.log(values)


//+++++++++++++++++++++++++++  .filter()   +++++++++++++++++++++++++

//    The filter() method is an iterative method. It calls a provided callbackFn function 
//    once for each element in an array, and constructs a new array of all the values for
//    which callbackFn returns a truthy value.

//  const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNum = myNums.filter( (num) => num > 5)    //  implicit return
// const newNum = myNums.filter( (num) => {               //  explicit return
//     return num > 4
// } )                                            //  filter give a return value.

// const newNum = []
// myNums.forEach( (num) => {
//     if(num > 7){
//         newNum.push(num)
//     }
// })
// console.log(newNum)          




const books = [
    {title: 'Book one', genre: 'history', publish: 1997, edition: 2020},
    {title: 'Book two', genre: 'culture', publish: 2002, edition: 2023},
    {title: 'Book three', genre: 'polity', publish: 2014, edition: 2022},
    {title: 'Book four', genre: 'history', publish: 1996, edition: 2024},
    {title: 'Book five', genre: 'geography', publish: 1992, edition: 2006},
    {title: 'Book six', genre: 'mathmetic', publish: 2007, edition: 2019},
    {title: 'Book seven', genre: 'culture', publish: 1950, edition: 2024},
    {title: 'Book eaight', genre: 'history', publish: 1950, edition: 2023},
    {title: 'Book nine', genre: 'polity', publish: 1980, edition: 2012},
    {title: 'Book ten', genre: 'mathmetic', publish: 1992, edition: 2015}
]

// let userBook = books.filter( (bk) => bk.genre === 'history')
//  let userBook = books.filter( (bk) => {
//     return bk.publish >= 1992 && bk.genre === 'history'
// })
//     console.log(userBook)

     
//   **********************    .map()     ************************

//    The map() method is an iterative method. It calls a provided callbackFn function
//    once for each element in an array and constructs a new array from the results.

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers = myNumbers.map( (num) => { return num * 2})
//  const newNumbers = myNumbers
//              .map( (num) => num * 2)
//              .map( (num) => {return num + 10})
//              .filter( (num) => num >= 20)
//     console.log(newNumbers)

//*********************  Reduce      *******************************

//   The reduce() method is an iterative method. It runs a "reducer" callback function over all
//   elements in the array, in ascending-index order, and accumulates them into a single value.


const myNum = [1,2,3,4,5]

// const totalnum = myNum.reduce(function (acc, currval) {
//  console.log(`accumulator: ${acc} and current Value: ${currval}`)
//    return acc + currval
// },5)
const totalnum = myNum.reduce( (acc,currval) => acc + currval,0)
 //   console.log(totalnum)

   
 const studyMaterial = [
    {
        item: "JS course",
        price: 2999
    },
    {
        item: "PY course",
        price: 999
    },
    {
        item: "Mobile Dev course",
        price: 5999
    },
    {
        item: "Data Science course",
        price: 12999
    },
    {
        item: "C++ course",
        price: 1999
    }
 ]

 const pricetoPay = studyMaterial.reduce( (acc, item) => acc + item.price, 0 )
   console.log(pricetoPay)
  