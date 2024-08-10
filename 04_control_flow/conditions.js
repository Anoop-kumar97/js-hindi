//     if

const temperature = 45

if(temperature === 45){
    console.log("executed");
}

if(temperature === 40){
    console.log("executed");
}else if (temperature <=50) {
    console.log("temperature less than 50");
} else{
    console.log("temperature geater than 50");
}


 let score = 200
if(score > 100){
    let power = "Fly"                //  power variable is a block scope so it's not define outside.
    console.log(`User Power: ${power}`);
}
console.log(`user power: ${power}`);   

 if(score > 150) console.log("It's Right");   // This is implicit scope

const loggedIn = true
const debitCard = true

if(loggedIn && debitCard && 5 == 5){     //  All condition True for code runing.
    console.log("Allow to buy course");
}

const loggedInGoogle = true
const loggedInEmail = true
const google = false

if(loggedInGoogle || google || loggedInEmail){ 
    console.log("User logged in");         //  Anyone condition True.
}