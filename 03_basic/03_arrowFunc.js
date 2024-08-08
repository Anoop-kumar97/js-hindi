
const user = {
     userName: "Anoop",
     price: 999,

     wellcomeMassage: function (){
        console.log(`${this.userName}, Wellcome to Website`);
        console.log(this)
     }
  }
// user.wellcomeMassage()
// user.userName = "Fauzdar"
// user.wellcomeMassage()

// console.log(this)          //   Empty Object



function chai(){
    userName: "Anoop",   //  this define inside in the form of Object so recieve more then values
    console.log(this);
    console.log(this.userName);  //  undefined => this define inside function can not useable.
}
//  chai()


 const chai = function(){
    let userName = "Anoop"
    console.log(this.userName);  //   this it's type not useable.
 }
//  chai()


const chai = () => {
    let userName = "Anoop"
    console.log(this.userName);
 }
//  chai()



//   ++++++++++++++++++++      ARROW FUNCTION        +++++++++++++++++++++++


// const addTwo = (num1,num2) => {       //    Basic Arrow Function
//     return num1 + num2                //    Explicit Return
// }
// console.log(addTwo(8,8))

//  const addTwo = (num1,num2) => num1 + num2

//  const addTwo = (num1,num2) => (num1 + num2)   //  Implicit Return
// console.log(addTwo(8,8))


// const addTwo = (num1,num2) => {userName: "anoop"}    //  it's not allow

// const addObj = (num1,num2) => ({userName: "anoop"})     //  it's Good allowed
// console.log(addObj(2,3))
