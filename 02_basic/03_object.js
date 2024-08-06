//  Singleton
//    Object.create

//       Object literals

const mysym = Symbol("key1")

const JSUser = {
    name: "Anoop",
    "FullName": "Anoop Fauzdar",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "anoop@google.com",
    isLogin: false,
    loginLastday: ["monday","friday"]
}

// console.log(JSUser.email)
// console.log(JSUser["email"])
// console.log(JSUser.FullName)
// console.log(JSUser["FullName"])   //   mostly uses
// console.log(JSUser.mysym)     //  it's not work , wrong search type
// console.log(JSUser[mysym])


JSUser.email = "anoop@chatgpt.com"
// Object.freeze(JSUser)                //   After freeze no change in your object.
JSUser.email = "anoop@microsoft.com"
JSUser.location = "bharatpur"
// console.log(JSUser)

JSUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JSUser.greeting())


JSUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.FullName}`);
}
console.log(JSUser.greetingTwo())