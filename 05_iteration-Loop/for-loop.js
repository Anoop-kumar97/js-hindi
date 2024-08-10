//  for  loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
//        console.log("5 is baet number")
    }
 //   console.log(element)
}

for (let i = 1; i <= 5; i++) {
//    console.log(` ${i}. Outer Loop Value`)
    for (let j = 1; j <= 10; j++) {
     //  console.log(`${j}. Inner Loop Value `)
   //    console.log(i + '*' + j + '=' + i*j)
    }
}


let myArray = ["Hatim","Shaktiman","Balveer","Dormon"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
 //   console.log(element)
}


// for (let index = 0; index < 10; index++) {
//      if(index == 5){
//         console.log("Detected fav number 5")
//         break
//      }
//      console.log(`Value of index is ${index}` )
// }



for (let index = 0; index <= 10; index++) {
    if(index == 5){
       console.log("Detected fav number 5")
       continue
    }
    console.log(`Value of index is ${index}` )
}
