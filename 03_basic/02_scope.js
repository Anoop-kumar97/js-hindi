let a =  "Outter 10"           //  outside code  ==> Global scope
const b = 20
var c = 30        //  var variable accept Global and Block Scope

if(true){       //    inside curlybrackets ==> block scope
    let a = 100
    const b = 200
    var c = 300
   // console.log("Inside: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
  const userName = "Anoop"
    function two(){
       const mailId = "aj@two.com"
        console.log(userName); 
        console.log(mailId);             
    }
   // console.log(mailId);   
    two();
}
//  one();


if(true){
    const userName = "Anoop"
    const mailId = "aj@abc.com"
    if(userName === "Anoop"){
        const webSite = " Youtube"
        console.log(userName + webSite);
    }
    console.log(mailId)
   // console.log(webSite)
}
//  console.log(userName)


// +++++++++++++++++++++     Interesting  Concept      +++++++++++++++++++++++++++

console.log(one(7));

function one(num){
    return num + 1
};


//  console.log(addTwo(3));
const addTwo = function (num){   //   function inside define variable so after console.log
    return num + 2               //    it's type a hoisting
};
console.log(addTwo(3));