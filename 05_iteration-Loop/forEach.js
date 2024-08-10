 //   forEach  Loop

 const coding = ["js", "ruby", "python", "java", "C++"]

// coding.forEach( function (val) {
//     console.log(val)
// } )

// coding.forEach(  (item) => {
//     console.log(item)
// } )

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach(  (item,index,arr) => {
//     console.log(item,index,arr);
// } )    


const mycoding = [
    {
        langName: "Javascript",
        langFileName: "JS"
    },
    {
         langName: "python",
        langFileName: "PY"
    },
    {
         langName: "java",
        langFileName: "JAVA"
    },
]

mycoding.forEach(  (item) => {
 //   console.log(item.langFileName);
    console.log(item.langName);
} )

