let name = "Anoop"
let repoCount = 55

//   console.log(name + repoCount + " value ")    //  it's not good code.
console.log(`Hi my name is ${name.toUpperCase()} and my repository count ${repoCount}.`)

const getName = new String ('Anoop-fg')

   //       use to direct in console == print getName and show length, prototype with All String Methods.

//  console.log(getName.__proto__)      //    define proto with inside object
//  console.log(getName[0]) 

//   console.log(getName.length);
//   console.log(getName.toUpperCase())
//   console.log(getName.charAt(4))
//   console.log(getName.indexOf('p'))

 const newString = getName.substring(0,5)    //    nnagetive value is not allow
//   console.log(newString)

 const anotherString = getName.slice(-8,5)
 // console.log(anotherString)


  const strOne = "    Anoop    "
  console.log(strOne)
  console.log(strOne.trim())    //  this mathod work starting and ending space remove


  const url = "https//Anoop.com/anoop%20fauzdar"

  console.log(url.replace('%20','-'))
  console.log(url.includes('fauzdar'))
  console.log(url.includes('rony'))


  const arrType = "Anoop-Fauzdar-Gazipur"

  console.log(arrType.split('-'))   //  string convert to array by .split mathod  |||

  