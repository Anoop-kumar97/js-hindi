//    for of Loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
//    console.log(num)
}

const str = "Hello World!"
for (const greet of str) {
//    console.log(`Each char is - ${greet}`)
}


//   Maps
//      =>  Map objects are collections of key-value pairs. 
//          A key in the Map may only occur once; it is unique in the Map's collection.

 const map = new Map()
 map.set('IN', 'India')
 map.set('USA', 'United State of America')
 map.set('FR', 'France')

//  console.log(map);

for (const [key, value] of map) {
//    console.log(key, ":-", value)
}


// const myObj = {        //   Object is not run in 'for of' Loop
//     game1: "BGMI",
//     game2: "WCC3",
//     game3: "LUDO"
// }
// for (const [key, value] of myObj) {
//  //   console.log(key, ":-", value)
// }


//  for in Loop
 
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
 }
 for (const key in myObject) {
 //  console.log(`${key}: FullName => ${myObject[key]}`)
 }



 const map1 = new Map()
 map.set('IN', 'India')
 map.set('USA', 'United State of America')
 map.set('FR', 'France')

 for (const key in map1) {    // it's not run in 'for in' loop
//   console.log(key);
 }